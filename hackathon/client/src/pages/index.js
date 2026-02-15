import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Navigation */}
            <nav className="border-b border-purple-800 bg-black/40 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">EC</span>
                        </div>
                        <span className="font-bold text-white text-xl">Email Classifier</span>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/App">
                            <Button variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-900/30">
                                Dashboard
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold text-white">
                            Intelligent Email
                            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"> Routing</span>
                        </h1>
                        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                            Automatically classify and route emails to the right department using advanced AI. Save hours of manual sorting every week.
                        </p>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <Link href="/App">
                            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg shadow-purple-500/50">
                                Get Started
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="px-8 py-6 text-lg border-purple-600 text-purple-300 hover:bg-purple-900/30"
                        >
                            Learn More
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-16">
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                            <p className="text-2xl font-bold text-purple-400">95%</p>
                            <p className="text-sm text-purple-300">Accuracy Rate</p>
                        </div>
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                            <p className="text-2xl font-bold text-purple-400">10s</p>
                            <p className="text-sm text-purple-300">Average Response</p>
                        </div>
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                            <p className="text-2xl font-bold text-purple-400">5</p>
                            <p className="text-sm text-purple-300">Departments</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-purple-800">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: '🤖',
                            title: 'AI-Powered Classification',
                            description: 'Uses advanced machine learning to understand email context and intent'
                        },
                        {
                            icon: '⚡',
                            title: 'Real-Time Processing',
                            description: 'Instantly routes emails to the right team as they arrive'
                        },
                        {
                            icon: '📊',
                            title: 'Analytics Dashboard',
                            description: 'Track classification metrics and department distribution'
                        },
                        {
                            icon: '🔒',
                            title: 'Secure Integration',
                            description: 'End-to-end encryption with OAuth2 authentication'
                        },
                        {
                            icon: '🎯',
                            title: 'Smart Learning',
                            description: 'Improves accuracy with user feedback and corrections'
                        },
                        {
                            icon: '🌐',
                            title: 'Multi-Language',
                            description: 'Supports emails in any language'
                        },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-700/50 rounded-lg hover:border-purple-600/70 transition-all"
                        >
                            <p className="text-4xl mb-4">{feature.icon}</p>
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-purple-200">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-700/50 rounded-xl p-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to transform your email workflow?</h3>
                    <p className="text-purple-200 mb-8">Start classifying emails automatically in just a few minutes.</p>
                    <Link href="/App">
                        <Button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold">
                            Launch Dashboard
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-purple-800 bg-black/40 backdrop-blur-md mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-purple-300">
                    <p>© 2024 Email Classifier Pro. Built with AI and passion.</p>
                </div>
            </footer>
        </div>
    );
}
