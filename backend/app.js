const form =
  "https://docs.google.com/forms/d/e/1FAIpQLSe6QkinSfvuI6P5Dg-L-J9uAAEeL9AMV2uBQViT0H3nuntF-Q/viewform?usp=pp_url&entry.469246373=Name&entry.1403942219=Unique+ID&entry.829537125=Email+ID&entry.1178935119=Phone+number";

function preprocess(url) {
  var split_up = url.split("?");

  var og_url = split_up[0].replace("viewform", "formResponse");

  var uniq_ids = split_up[1]
    .split("&")
    .slice(1)
    .map((i) => {
      const id = i.split("=");
      return { entry_name: id[1].replace("+", " "), entry_id: id[0] };
    });

  console.log(og_url);
  console.log(uniq_ids);
}

preprocess(form);
