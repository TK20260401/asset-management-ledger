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
      <header className="flex items-center justify-between border-b border-foreground/10 px-6 py-4">
        <h1 className="text-lg font-bold">備品管理台帳</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-foreground/60">{user.email}</span>
          <LogoutButton />
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <p className="text-foreground/40">備品一覧（準備中）</p>
      </main>
    </div>
  );
}
