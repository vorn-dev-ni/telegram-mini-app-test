'use client'; // Make sure this is added at the top to ensure client-side rendering

import UserInfo from "./component/UserInfo";

export default function Home() {
  return (
    <main className="max-w-[800px] mx-auto  my-20 md:mx-0 px-10 flex-col items-center">
      <h5 className="text-xl font-bold ">Welcome folk</h5>
      <UserInfo />
    </main>
  );
}
