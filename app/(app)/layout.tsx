import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import { FloatingChatWidget } from "@/components/chat/FloatingChatWidget";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <div>{children}</div>
      <SanityLive />
      <FloatingChatWidget />
    </ClerkProvider>
  );
}

export default AppLayout;
