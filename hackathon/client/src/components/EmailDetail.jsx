import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EmailDetail({ email, onClose }) {
    if (!email) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-700/50 max-h-96 overflow-y-auto">
                <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                        <CardTitle className="text-white text-xl">{email.subject}</CardTitle>
                        <CardDescription className="text-purple-200 mt-2">From: {email.from}</CardDescription>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-purple-300 hover:text-white text-2xl"
                    >
                        ×
                    </button>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-white mb-2">Classification</h3>
                        <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg text-blue-300 font-medium">
                            {email.team}
                        </span>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-2">Preview</h3>
                        <p className="text-purple-200">{email.preview}</p>
                    </div>
                    <div className="flex gap-2 pt-4">
                        <Button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                            Correct
                        </Button>
                        <Button className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white">
                            Incorrect
                        </Button>
                        <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                            Forward
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
