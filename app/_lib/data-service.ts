import { supabase } from "./supabase";

export async function getAuthor(email:string) {
  const { data } = await supabase
    .from("author")
    .select("*")
    .eq("email", email)
    .single();
  return data;
}


export async function createAuthor(newAuthor:any) {
  const { data, error } = await supabase.from("author").insert([newAuthor]);
  if (error) {
    console.error(error);
    throw new Error("Author could not be created");
  }
  return data;
}