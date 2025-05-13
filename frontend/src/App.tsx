import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

import { Button } from './components/ui/button';

function App() {
  return (
    <>
      <h1 className="text-green-700 ">Hello World!</h1>
      <Button>Click me</Button>

      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </>
  );
}

export default App;
