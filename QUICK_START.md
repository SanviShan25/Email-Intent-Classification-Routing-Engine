# Quick Start Guide - Enhanced Email Classifier

## 🚀 Getting Started

### Option 1: Streamlit Web App (Currently Running ✅)

**Access the app:**
- Local: http://localhost:8501
- Network: http://10.6.181.118:8501

**Steps:**
1. Open the local URL in your browser
2. In the sidebar, go to the "Monitor" tab
3. Enter your Gmail email address
4. Enter your [Gmail App Password](https://myaccount.google.com/apppasswords)
5. Click "▶ Start" to begin monitoring
6. Emails will appear in the main panel as they arrive
7. For each email, you can:
   - ✅ **Correct** - Mark classification as correct
   - ❌ **Wrong** - Indicate incorrect classification
   - 📤 **Forward** - Forward the email
   - 🔗 **Details** - View full email content

**Sidebar Features:**
- **Monitor Tab**: Setup and manage email connection
- **Dashboard Tab**: View quick statistics
- **Settings Tab**: Configure preferences (auto-forward, confidence threshold, etc.)

---

### Option 2: Next.js Dashboard (Enhanced Version)

**Setup:**
```bash
cd hackathon/client
npm install
npm run dev
```

**Access:**
- http://localhost:3000

**Features:**
- **Landing Page**: Professional introduction with features
- **Dashboard**: Multi-tab interface (Monitor, Dashboard, Settings)
- **Email Management**: Setup card + real-time email list
- **Statistics**: Visual overview of classified emails
- **Settings**: Advanced configuration options

---

## 🎨 UI Features Explained

### Streamlit App

#### Sidebar Configuration
```
┌─────────────────────┐
│ 🔧 Configuration    │
├─ Monitor    ────────┤
│  • Email input      │
│  • Password input   │
│  • ▶ Start / ⏹ Stop│
├─ Dashboard ─────────┤
│  • Total Emails: 42 │
│  • Classified: 40   │
│  • Distribution    │
├─ Settings  ─────────┤
│  • Auto-forward    │
│  • Notifications   │
│  • Confidence: 75% │
└─────────────────────┘
```

#### Main Panel
```
┌──────────────────────────────────────┐
│ 📊 Quick Metrics                     │
│  📧 3    ✅ 42    ⏳ 1               │
├──────────────────────────────────────┤
│ 📬 Recent Emails                     │
│                                      │
│ ▼ Invoice #2024-001                  │
│   From: billing@vendor.com           │
│   🎯 Finance        📊 94%           │
│   [✅] [❌] [📤] [🔗]               │
├──────────────────────────────────────┤
│ ▼ Customer Complaint - Order #5432   │
│   From: customer@example.com         │
│   🎯 Support        📊 87%           │
│   [✅] [❌] [📤] [🔗]               │
└──────────────────────────────────────┘
```

### Next.js Dashboard

#### Tab Navigation
```
┌────────────────────────────────────────────────┐
│ [Monitor] [Dashboard] [Settings]               │
└────────────────────────────────────────────────┘
```

#### Monitor Tab
```
┌──────────────┬──────────────────────────────────┐
│ Setup Card   │ Recent Emails                    │
│              │                                  │
│ Email:       │ ▢ Invoice #2024-001             │
│ [_______]    │   billing@vendor.com            │
│              │   Finance | 📎 1                │
│ Password:    │                                  │
│ [_______]    │ ▢ Customer Complaint            │
│              │   customer@example.com          │
│ [Start]      │   Support                       │
└──────────────┴──────────────────────────────────┘
```

#### Dashboard Tab
```
┌──────────────┬──────────────┬──────────────┐
│ 📧 Total     │ ✅ Classified│ ⏳ Pending   │
│   42         │   40         │   2          │
└──────────────┴──────────────┴──────────────┘

┌────────────────────────────────────────────┐
│ Department Distribution                    │
│                                            │
│ Finance      ████████░░░░  12             │
│ Support      ███████████░░░  15           │
│ HR           ██████░░░░░░░  8             │
│ Operations   █████░░░░░░░░  7             │
└────────────────────────────────────────────┘
```

---

## 🔑 Key Features

### Classification Confidence
- Each classification shows a confidence score (0-100%)
- Only emails above the threshold are auto-routed
- Configurable in Settings

### Feedback System
- Mark classifications as correct or incorrect
- Helps improve the AI model over time
- Tracks accuracy metrics

### Real-Time Monitoring
- Emails appear instantly as they arrive
- Status indicator shows active/inactive
- Refresh button to manually check

### Department Routing
Automatically routes to:
- Finance
- Customer Support
- HR
- Operations
- Legal
- (Additional departments can be added)

---

## ⚙️ Configuration

### Gmail Setup
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Create an App Password
4. Use that password (not your Gmail password)

### Settings
- **Confidence Threshold**: Only classify emails above this % confidence
- **Auto-Forward**: Automatically forward to department email
- **Notifications**: Desktop alerts for new emails
- **Model**: Choose between local (Ollama) or cloud API

---

## 🎯 Workflow Example

1. **Email arrives** from customer about broken product
2. **AI classifies** as "Customer Support" (87% confidence)
3. **Status updates** in dashboard
4. **Email displays** in the recent emails list
5. **You review** and confirm correct classification
6. **Auto-forward** to support@company.com (if enabled)
7. **Feedback recorded** to improve future accuracy

---

## 📊 Dashboard Metrics

| Metric | Meaning |
|--------|---------|
| Total Emails | All emails processed |
| Classified | Successfully routed emails |
| Pending | Awaiting routing decision |
| Accuracy | Correct/Total classifications |
| Department Distribution | How emails are split across teams |

---

## 🆘 Troubleshooting

### App Won't Start
```bash
# Kill any running instances
pkill -f streamlit

# Reinstall dependencies
pip install -r requirements.txt

# Run again
streamlit run src/app.py
```

### Connection Failed
- Check Gmail credentials
- Ensure App Password is used (not regular password)
- Check internet connection
- Verify Gmail IMAP is enabled

### Emails Not Appearing
- Check "Monitoring" status in sidebar
- Try clicking "Refresh" button
- Verify email account has new unread emails
- Check Spam/Junk folder

---

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review the configuration in Settings
3. Test with sample emails first
4. Check browser console for errors

---

## 🎉 Enjoy Your Enhanced Email Classifier!

You now have a professional, modern interface for intelligent email routing!
