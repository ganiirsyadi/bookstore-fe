import { supabase } from "./supabaseClient";

export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signIn({
    provider: "google",
  });
  if (error) alert("Login gagal, mohon ulangi kembali")
};

export const signOutUser = async () => {
  await supabase.auth.signOut()
  window.location.href = "/"  
}
