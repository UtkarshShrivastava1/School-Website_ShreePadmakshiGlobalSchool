import { Card, CardContent } from "./card";
import { MessageCircle } from "lucide-react";

export default function SteamChatCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center max-w-sm">
        <div className="flex justify-center">
          <div className="bg-gradient-to-b from-blue-400 to-blue-600 p-4 rounded-full">
            <MessageCircle className="text-white w-8 h-8" />
          </div>
        </div>
        <CardContent>
          <h2 className="text-white text-lg font-semibold mt-4">Steam Chat</h2>
          <p className="text-gray-400 text-sm mt-2">
            Talk with friends or groups via text or voice without leaving Steam.
            Videos, Tweets, GIFs, and more are supported; use wisely.
          </p>
          <a href="#" className="text-blue-400 mt-4 inline-block hover:underline">
            Learn More →
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
