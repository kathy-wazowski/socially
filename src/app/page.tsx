import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <>
      {/* if the user is signed out, show the sign in button */}
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      {/* if the user is signed in, show the user button */}
      <SignedIn>
        <UserButton />
      </SignedIn>

      <ModeToggle />
    </>
  );
}
