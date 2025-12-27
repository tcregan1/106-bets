import { redirect } from "next/navigation";

export default function HomePage()
{
  const isLoggedIn = true;

  if (isLoggedIn)
  {
    redirect("/bets");
  }

  redirect("/login");
}