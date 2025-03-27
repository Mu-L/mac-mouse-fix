document.addEventListener("DOMContentLoaded", function() {
  
  // Implement special blockquote styles from GitHub Markdown. See https://github.com/orgs/community/discussions/16925

  // Create map from `blockquote start` to `css classes that we attach to that blockquote`
  // Notes: 
  //  - Most symbols that we tried(︕⚠ⓘ❗︎ℹ️⚠️💡) look really weird. The only good-looking one is ⚠. Using SF Symbols or the GitHub svg symbols would be better.


  const map = {
    '[!NOTE]':      {
      'class': 'markdown-alert note',
      'title': "⚠ Note",             
    },
    '[!TIP]':       {
      'class': 'markdown-alert tip',
      'title': "⚠ Tip",
    },
    '[!IMPORTANT]': {
      'class': 'markdown-alert important',
      'title': "⚠ Important",
    },
    '[!WARNING]':   {
      'class': 'markdown-alert warning',
      'title': "⚠ Warning",
    },
    '[!CAUTION]':   {
      'class': 'markdown-alert caution',
      'title': "⚠ Caution",
    },
  };

  // Edit blockquotes, according to the map

  for (blockquote of document.querySelectorAll("blockquote")) {
    for (key in map) {

      if (blockquote.innerText.startsWith(key)) {

        // Remove the [!NOTE] key from the content
        blockquote.innerHTML = blockquote.innerHTML.replace(key, "").trim(); // This only replaces the first occurence. Src: https://stackoverflow.com/questions/3214886/javascript-replace-only-replaces-first-match

        // Remove weird extra linebreaks
        //  Explanation: If you put more than one space after [!CAUTION], then pandoc will insert weird extra linebreaks, which will mess up formatting. This fixes that.
        if (blockquote.firstChild.innerHTML.startsWith("<br>")){
          blockquote.firstChild.innerHTML = blockquote.firstChild.innerHTML.replace("<br>", "");
        }
        // Add classes
        const newClasses = map[key]['class'].split(" ")
        blockquote.classList.add(...newClasses);

        // Insert element for holding the title (The title says sth like "ⓘ Note")
        const titleP = document.createElement('p')
        titleP.className = 'markdown-alert-title'
        titleP.innerText = map[key]['title']

        blockquote.prepend(titleP)
      }
    }
  };
});