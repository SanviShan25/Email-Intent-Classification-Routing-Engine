'use client';

import React, { useState, useEffect } from 'react';
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function App() {
    const [currentTab, setCurrentTab] = useState('monitor');
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [emailId, setEmailId] = useState('');
    const [appPassword, setAppPassword] = useState('');
    const [monitoring, setMonitoring] = useState(false);
    const [stats, setStats] = useState({ total: 0, classified: 0, pending: 0 });

    const handleMonitor = async () => {
        if (!emailId || !appPassword) {
            alert('Please enter both email and password');
            return;
        }
        setMonitoring(true);
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    const handleRefresh = () => {
        setLoading(true);
        // Simulate API call to refresh emails
        setTimeout(() => {
            setEmails([
                {
                    id: 1,
                    from: 'john@example.com',
                    subject: 'Invoice #2024-001',
                    preview: 'Please find the attached invoice for...',
                    team: 'Finance',
                    timestamp: new Date(),
                    read: false,
                    attachments: 1,
                },
                {
                    id: 2,
                    from: 'support@company.com',
                    subject: 'Customer complaint - Order #5432',
                    preview: 'We have received a complaint regarding...',
                    team: 'Customer Support',
                    timestamp: new Date(),
                    read: false,
                    attachments: 0,
                },
                {
                    id: 3,
                    from: 'hr@company.com',
                    subject: 'New Employee Onboarding - Jane Doe',
                    preview: 'Please process the onboarding for...',
                    team: 'HR',
                    timestamp: new Date(),
                    read: true,
                    attachments: 2,
                },
            ]);
            setStats({ total: 3, classified: 3, pending: 0 });
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Header */}
            <div className="border-b border-purple-800 bg-black/40 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">EC</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Email Classifier</h1>
                                <p className="text-xs text-purple-300">AI-Powered Email Routing</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <div className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-300">
                                {monitoring ? '🟢 Active' : '⚪ Inactive'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Tab Navigation */}
                <div className="flex gap-2 mb-8">
                    {['monitor', 'dashboard', 'settings'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setCurrentTab(tab)}
                            className={`px-6 py-2 rounded-lg font-medium transition-all ${
                                currentTab === tab
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                                    : 'bg-purple-900/30 text-purple-200 hover:bg-purple-800/30'
                            }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Monitor Tab */}
                {currentTab === 'monitor' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Setup Card */}
                        <Card className="lg:col-span-1 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-700/50">
                            <CardHeader className="space-y-2">
                                <CardTitle className="text-white">Setup Email Monitor</CardTitle>
                                <CardDescription className="text-purple-200">
                                    Connect your Gmail account
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-purple-200 mb-2">Email Address</label>
                                    <Input
                                        placeholder="your.email@gmail.com"
                                        type="email"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                        className="bg-purple-950/50 border-purple-700 text-white placeholder:text-purple-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-purple-200 mb-2">App Password</label>
                                    <Input
                                        placeholder="••••••••••••••••"
                                        type="password"
                                        value={appPassword}
                                        onChange={(e) => setAppPassword(e.target.value)}
                                        className="bg-purple-950/50 border-purple-700 text-white placeholder:text-purple-400"
                                    />
                                </div>
                                <Button
                                    onClick={handleMonitor}
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
                                >
                                    {loading ? 'Connecting...' : 'Start Monitoring'}
                                </Button>
                                <p className="text-xs text-purple-300 text-center">
                                    Your credentials are secure and never stored.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Emails List */}
                        <div className="lg:col-span-2">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-white">Recent Emails</h2>
                                <Button
                                    onClick={handleRefresh}
                                    disabled={loading}
                                    variant="outline"
                                    className="border-purple-700 text-purple-300 hover:bg-purple-900/30"
                                >
                                    {loading ? 'Loading...' : 'Refresh'}
                                </Button>
                            </div>
                            <div className="space-y-2 max-h-96 overflow-y-auto">
                                {emails.length === 0 ? (
                                    <Card className="bg-purple-900/20 border-purple-700/50">
                                        <CardContent className="p-8 text-center">
                                            <p className="text-purple-300">No emails yet. Connect your account to get started.</p>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    emails.map((email) => (
                                        <div
                                            key={email.id}
                                            onClick={() => setSelectedEmail(email)}
                                            className={`p-4 rounded-lg cursor-pointer transition-all ${
                                                selectedEmail?.id === email.id
                                                    ? 'bg-purple-600/30 border-purple-500 border'
                                                    : 'bg-purple-900/20 border border-purple-700/50 hover:bg-purple-900/30'
                                            }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <p className={`font-semibold ${email.read ? 'text-purple-200' : 'text-white'}`}>
                                                        {email.subject}
                                                    </p>
                                                    <p className="text-sm text-purple-300">{email.from}</p>
                                                    <p className="text-xs text-purple-400 mt-1">{email.preview}</p>
                                                </div>
                                                <div className="text-right ml-4">
                                                    <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs text-blue-300 font-medium">
                                                        {email.team}
                                                    </span>
                                                    {email.attachments > 0 && (
                                                        <p className="text-xs text-purple-300 mt-2">📎 {email.attachments}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Dashboard Tab */}
                {currentTab === 'dashboard' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Stats Cards */}
                        {[
                            { label: 'Total Emails', value: stats.total, icon: '📧', color: 'from-blue-600 to-cyan-600' },
                            { label: 'Classified', value: stats.classified, icon: '✅', color: 'from-green-600 to-emerald-600' },
                            { label: 'Pending', value: stats.pending, icon: '⏳', color: 'from-orange-600 to-red-600' },
                        ].map((stat, idx) => (
                            <Card key={idx} className={`bg-gradient-to-br ${stat.color}/20 border-${stat.color.split('-')[1]}-700/50`}>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-purple-300 text-sm font-medium">{stat.label}</p>
                                            <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                                        </div>
                                        <span className="text-4xl">{stat.icon}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Department Distribution */}
                        <Card className="col-span-1 md:col-span-3 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-700/50">
                            <CardHeader>
                                <CardTitle className="text-white">Email Distribution by Department</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {['Finance', 'Customer Support', 'HR', 'Operations', 'Legal'].map((dept, idx) => (
                                        <div key={idx} className="flex items-center justify-between">
                                            <p className="text-purple-200">{dept}</p>
                                            <div className="flex-1 mx-4 bg-purple-900/50 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-full"
                                                    style={{ width: `${Math.random() * 80 + 20}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-purple-300 w-8 text-right">{Math.floor(Math.random() * 10) + 1}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Settings Tab */}
                {currentTab === 'settings' && (
                    <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-700/50 max-w-2xl">
                        <CardHeader>
                            <CardTitle className="text-white">Settings</CardTitle>
                            <CardDescription className="text-purple-200">Configure classification preferences</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-purple-200 mb-2">Classification Model</label>
                                <select className="w-full px-4 py-2 bg-purple-950/50 border border-purple-700 text-white rounded-lg">
                                    <option>Ollama (Local)</option>
                                    <option>Cloud API</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-purple-200 mb-2">Auto-Forward Enabled</label>
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="w-4 h-4" defaultChecked />
                                    <span className="text-purple-200">Automatically forward classified emails to departments</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-purple-200 mb-2">Classification Confidence Threshold</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue="75"
                                    className="w-full"
                                />
                                <p className="text-sm text-purple-300 mt-2">75% - Only classify if confidence is above this threshold</p>
                            </div>
                            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                                Save Settings
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
