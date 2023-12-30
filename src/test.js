
export async function preprocess(url) {
  var split_up = url.split("?");
  var id = split_up[0].split("/")[6];
  var og_url = split_up[0].replace("viewform", "formResponse");

  var uniq_ids = split_up[1]
    .split("&")
    .slice(1)
    .map((i) => {
      const id = i.split("=");
      return { entry_name: id[1].replace("+", " "), entry_id: id[0] };
    });

    const data = {
      'id' : id,
      'url' : og_url,
      'entries' : uniq_ids
    }
  // const currUser = await supabase.auth.getUser();
  return data;
  // console.log(currUser.data)
}

