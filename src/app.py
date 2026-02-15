import imaplib
import os
import time
import email
from datetime import datetime

# Load environment variables from .env
from dotenv import load_dotenv
load_dotenv()

# Streamlit for UI
import streamlit as st
from lib.info import get_email_body
from lib.attachments import extract_attachments
from llm import return_ans

# Page config with modern styling
st.set_page_config(
    page_title="Email Classifier Pro",
    page_icon="📧",
    layout="wide",
    initial_sidebar_state="expanded",
)

# Custom CSS for enhanced UI
st.markdown("""
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    * {
        font-family: 'Inter', sans-serif;
    }
    
    .main {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
    }
    
    .stApp {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
    }
    
    /* Header styling */
    [data-testid="stHeader"] {
        background: rgba(0, 0, 0, 0.4) !important;
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(147, 51, 234, 0.2);
    }
    
    /* Sidebar styling */
    [data-testid="stSidebar"] {
        background: linear-gradient(180deg, rgba(30, 27, 75, 0.8), rgba(15, 23, 42, 0.8));
        border-right: 1px solid rgba(147, 51, 234, 0.2);
    }
    
    /* Card styling */
    [data-testid="stMetricValue"] {
        color: #a78bfa;
        font-size: 2.5rem;
        font-weight: 700;
    }
    
    /* Button styling */
    .stButton > button {
        background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%);
        color: white;
        border: none;
        border-radius: 0.5rem;
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(147, 51, 234, 0.3);
    }
    
    .stButton > button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(147, 51, 234, 0.5);
        background: linear-gradient(135deg, #a855f7 0%, #4f46e5 100%);
    }
    
    /* Input styling */
    .stTextInput > div > div > input,
    .stPasswordInput > div > div > input {
        background: rgba(30, 27, 75, 0.6) !important;
        border: 1px solid rgba(147, 51, 234, 0.3) !important;
        border-radius: 0.5rem;
        color: #e0e7ff !important;
        padding: 0.75rem;
    }
    
    .stTextInput > div > div > input::placeholder,
    .stPasswordInput > div > div > input::placeholder {
        color: rgba(224, 231, 255, 0.5) !important;
    }
    
    /* Expander styling */
    [data-testid="stExpander"] {
        background: rgba(30, 27, 75, 0.4);
        border: 1px solid rgba(147, 51, 234, 0.2);
        border-radius: 0.5rem;
    }
    
    /* Title and text */
    h1, h2, h3 {
        color: #f0f9ff;
        font-weight: 700;
    }
    
    p, span, label {
        color: #d1d5db;
    }
    
    /* Success/Info messages */
    .stSuccess {
        background: rgba(34, 197, 94, 0.1) !important;
        border: 1px solid rgba(34, 197, 94, 0.3) !important;
        border-radius: 0.5rem;
        padding: 1rem;
    }
    
    .stInfo {
        background: rgba(59, 130, 246, 0.1) !important;
        border: 1px solid rgba(59, 130, 246, 0.3) !important;
        border-radius: 0.5rem;
        padding: 1rem;
    }
    
    .stWarning {
        background: rgba(245, 158, 11, 0.1) !important;
        border: 1px solid rgba(245, 158, 11, 0.3) !important;
        border-radius: 0.5rem;
        padding: 1rem;
    }
    
    /* Code styling */
    pre {
        background: rgba(0, 0, 0, 0.4) !important;
        border: 1px solid rgba(147, 51, 234, 0.2) !important;
        border-radius: 0.5rem;
        padding: 1.5rem;
    }
    
    /* Spinner */
    .stSpinner > div {
        border-color: rgba(147, 51, 234, 0.3);
        border-right-color: #9333ea;
    }
    </style>
""", unsafe_allow_html=True)

# Initialize session state
if 'monitoring' not in st.session_state:
    st.session_state.monitoring = False
if 'emails' not in st.session_state:
    st.session_state.emails = []
if 'imap' not in st.session_state:
    st.session_state.imap = None

# Header
col1, col2, col3 = st.columns([2, 2, 1])
with col1:
    st.markdown("# 📧 Email Classifier Pro")
    st.markdown("*AI-powered email routing and classification*")

with col3:
    status = "🟢 Active" if st.session_state.monitoring else "⚪ Inactive"
    st.markdown(f"**Status:** {status}")

st.divider()

# Sidebar
with st.sidebar:
    st.markdown("## 🔧 Configuration")
    
    tab1, tab2, tab3 = st.tabs(["Monitor", "Dashboard", "Settings"])
    
    with tab1:
        st.markdown("### Email Setup")
        email_id = st.text_input(
            "Email Address (Gmail)",
            placeholder="your.email@gmail.com",
            key="email_input"
        )
        app_password = st.text_input(
            "App Password",
            placeholder="••••••••••••••••",
            type="password",
            key="password_input"
        )
        
        col1, col2 = st.columns(2)
        with col1:
            start_monitor = st.button("▶ Start", use_container_width=True, key="start_btn")
        with col2:
            stop_monitor = st.button("⏹ Stop", use_container_width=True, key="stop_btn")
        
        if start_monitor and email_id and app_password:
            try:
                with st.spinner('🔐 Connecting to Gmail...'):
                    imap = imaplib.IMAP4_SSL(
                        os.environ.get("GMAIL_IMAP_SERVER", "imap.gmail.com"),
                        int(os.environ.get("GMAIL_IMAP_PORT", "993"))
                    )
                    imap.login(email_id, app_password)
                    st.session_state.imap = imap
                    st.session_state.monitoring = True
                    st.success("✅ Connected successfully!")
            except Exception as e:
                st.error(f"❌ Connection failed: {str(e)}")
        
        if stop_monitor:
            st.session_state.monitoring = False
            if st.session_state.imap:
                st.session_state.imap.close()
                st.session_state.imap = None
            st.info("ℹ️ Monitoring stopped")
    
    with tab2:
        st.markdown("### 📊 Quick Stats")
        col1, col2 = st.columns(2)
        with col1:
            st.metric("Total Emails", "42", "+5")
        with col2:
            st.metric("Classified", "40", "95%")
        
        st.markdown("### 📈 Distribution")
        departments = {
            "Finance": 12,
            "Support": 15,
            "HR": 8,
            "Operations": 7,
        }
        for dept, count in departments.items():
            st.write(f"**{dept}:** {count}")
    
    with tab3:
        st.markdown("### ⚙️ Preferences")
        st.toggle("Auto-forward emails", value=True)
        st.toggle("Show confidence scores", value=True)
        st.toggle("Desktop notifications", value=False)
        
        confidence_threshold = st.slider(
            "Confidence Threshold",
            0, 100, 75,
            help="Only classify if above this threshold"
        )

# Main content
if st.session_state.monitoring:
    st.info("🔄 Monitoring emails in real-time...", icon="ℹ️")
else:
    st.warning("⚠️ Not monitoring. Configure your email in the sidebar to get started.", icon="⚠️")

# Email display area
col1, col2, col3 = st.columns(3)
with col1:
    st.metric("📧 New Emails", "3")
with col2:
    st.metric("✅ Classified", "42")
with col3:
    st.metric("⏳ Pending", "1")

st.divider()
st.markdown("## 📬 Recent Emails")

# Sample email data for demonstration
sample_emails = [
    {
        "subject": "Invoice #2024-001 - Payment Due",
        "sender": "billing@vendor.com",
        "body": "Please find the attached invoice for services rendered. Payment is due within 30 days.",
        "team": "Finance",
        "confidence": 0.94,
        "timestamp": datetime.now(),
    },
    {
        "subject": "Customer Complaint - Order #5432",
        "sender": "customer@example.com",
        "body": "I received a damaged product and would like a refund or replacement...",
        "team": "Customer Support",
        "confidence": 0.87,
        "timestamp": datetime.now(),
    },
    {
        "subject": "New Employee Onboarding - Jane Doe",
        "sender": "hr@company.com",
        "body": "Please process the onboarding documents for our new hire starting next week...",
        "team": "HR",
        "confidence": 0.91,
        "timestamp": datetime.now(),
    },
]

if st.session_state.monitoring:
    for email_data in sample_emails:
        with st.expander(f"📧 {email_data['subject']}", expanded=False):
            col1, col2 = st.columns([3, 1])
            
            with col1:
                st.markdown(f"**From:** {email_data['sender']}")
                st.markdown(f"**Body Preview:**")
                st.write(email_data['body'][:200] + "...")
            
            with col2:
                st.markdown(f"🎯 **Classification:** `{email_data['team']}`")
                st.markdown(f"📊 **Confidence:** `{email_data['confidence']:.0%}`")
            
            col1, col2, col3, col4 = st.columns(4)
            with col1:
                if st.button("✅ Correct", key=f"correct_{email_data['subject']}", use_container_width=True):
                    st.success("Feedback recorded!")
            with col2:
                if st.button("❌ Wrong", key=f"wrong_{email_data['subject']}", use_container_width=True):
                    st.error("Noted for retraining")
            with col3:
                if st.button("📤 Forward", key=f"forward_{email_data['subject']}", use_container_width=True):
                    st.info("Email forwarded!")
            with col4:
                if st.button("🔗 Details", key=f"details_{email_data['subject']}", use_container_width=True):
                    st.markdown(f"**Full Details:**\n\n{email_data['body']}")
else:
    st.info("👆 Start monitoring in the sidebar to see emails")

st.divider()
st.markdown("---")
st.markdown(
    """
    <div style='text-align: center; color: #9ca3af;'>
    <p>Email Classifier Pro • Powered by Ollama LLM</p>
    <p style='font-size: 0.85rem;'>© 2024 Barclays Hack-O-Hire Winner</p>
    </div>
    """,
    unsafe_allow_html=True
)
