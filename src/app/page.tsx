import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "./logout-button";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-full flex-col">
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-foreground/10 px-4 py-3 sm:px-6 sm:py-4">
        <h1 className="text-base font-bold sm:text-lg">備品管理台帳</h1>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden text-sm text-foreground/60 sm:inline">
            {user.email}
          </span>
          <LogoutButton />
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <p className="text-foreground/40">備品一覧（準備中）</p>
      </main>
    </div>
  );
}
