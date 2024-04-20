/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("countries").del();
  const startDate = new Date("2024-04-20");
  const endDate = new Date("2024-05-30");
  const dates = [];

  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    dates.push(new Date(date));
  }

  // Shuffle the dates array
  for (let i = dates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dates[i], dates[j]] = [dates[j], dates[i]];
  }

  await knex("countries").insert([
    {
      name: "Afghanistan",
      capital: "Kabul",
      flag: "https://flagcdn.com/af.svg",
      description:
        "Kabul is known for its rich history and cultural heritage. It is home to many historical sites, including the famous Babur's Gardens and the Kabul Museum. The city is also known for its vibrant bazaars and delicious Afghan cuisine. Fun fact: Kabul is one of the highest capital cities in the world, located at an elevation of over 5,900 feet (1,800 meters) above sea level.",
      hint1: "This capital has been inhabited for over 3,500 years",
      hint2: "This capital has been through many wars",
      hint3: "This capital ends with the letter 'l'",
      hint4: "This capital begins with a 'K'",
      hint5: "This capital is 5 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Albania",
      capital: "Tirana",
      flag: "https://flagcdn.com/al.svg",
      description:
        "Tirana is known for its vibrant culture, lively nightlife, and beautiful architecture. The city is home to many museums, art galleries, and theaters, as well as a variety of restaurants and cafes. Fun fact: Tirana is one of the sunniest cities in Europe, with an average of 2,544 hours of sunshine per year.",
      hint1: "This capital is near the Adriatic Sea",
      hint2: "From this capital, you can see the Dajti Mountain",
      hint3: "This capital ends with the letter 'a'",
      hint4: "This capital begins with a 'T'",
      hint5: "This capital is 6 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Algeria",
      capital: "Algiers",
      flag: "https://flagcdn.com/dz.svg",
      description:
        "Algiers is the capital and largest city of Algeria. It is known for its rich history, diverse culture, and stunning architecture. The city is home to many historical landmarks, such as the Casbah of Algiers and the Notre Dame d'Afrique. Fun fact: Algiers is located on the Mediterranean Sea and offers beautiful views of the coastline.",
      hint1: "This capital is near the Mediterranean Sea",
      hint2: "This capital has was once a pirate stronghold",
      hint3: "This capital ends with the letter 's'",
      hint4: "This capital begins with an 'A'",
      hint5: "This capital is 7 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Andorra",
      capital: "Andorra la Vella",
      flag: "https://flagcdn.com/ad.svg",
      description:
        "Andorra la Vella is the capital of the Principality of Andorra. It is known for its picturesque beauty, charming old town, and tax-free shopping. The city is surrounded by stunning mountains and offers various outdoor activities, such as hiking and skiing. Fun fact: Andorra la Vella is one of the highest capital cities in Europe, located at an elevation of 3,356 feet (1,023 meters) above sea level.",
      hint1: "This capital is located in the Pyrenees mountains",
      hint2: "This capital is 3 words long with 2 spaces",
      hint3: "This capital ends with the letter 'a'",
      hint4: "This capital begins with an 'A'",
      hint5: "This capital ends with the word 'Vella'",
      challenge_date: dates.pop(),
    },
    {
      name: "Argentina",
      capital: "Buenos Aires",
      flag: "https://flagcdn.com/ar.svg",
      description:
        "Buenos Aires is the capital and largest city of Argentina. It is known for its vibrant culture, tango music and dance, and European-inspired architecture. The city offers a wide range of attractions, including historic neighborhoods, art galleries, and delicious cuisine. Fun fact: Buenos Aires is often referred to as the 'Paris of South America' due to its elegant boulevards and grand architecture.",
      hint1:
        "This capital is the second largest city in South America after São Paulo",
      hint2:
        "This capital is home to the famous La Recoleta Cemetery and the Teatro Colón",
      hint3: "This capital is 2 words long",
      hint4: "This capital begins with a 'B'",
      hint5: "This capital ends with the word 'Aires'",
      challenge_date: dates.pop(),
    },
    {
      name: "Australia",
      capital: "Canberra",
      flag: "https://flagcdn.com/au.svg",
      description:
        "Canberra is the capital city of Australia. It is known for its modern architecture, beautiful parks, and cultural institutions. The city is home to many national monuments and landmarks, including the Australian War Memorial and Parliament House. Fun fact: Canberra was purpose-built as the capital of Australia and is located between Sydney and Melbourne.",
      hint1: "This capital is the largest inland city in Australia",
      hint2:
        "This capital was founded in 1913 as a compromise between Sydney and Melbourne",
      hint3: "This capital ends with the letter 'a'",
      hint4: "This capital begins with a 'C'",
      hint5: "This capital is 7 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Austria",
      capital: "Vienna",
      flag: "https://flagcdn.com/at.svg",
      description:
        "Vienna is the capital and largest city of Austria. It is known for its rich history, classical music, and stunning architecture. The city is home to many famous landmarks, including the Schönbrunn Palace and St. Stephen's Cathedral. Fun fact: Vienna is often ranked as one of the most livable cities in the world.",
      hint1: "Famous people such as Mozart and Beethoven lived in this capital",
      hint2:
        "This capital is known for its coffee house culture and delicious pastries",
      hint3: "This capital ends with a vowel",
      hint4: "This capital begins with a 'V'",
      hint5: "This capital is 6 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Azerbaijan",
      capital: "Baku",
      flag: "https://flagcdn.com/az.svg",
      description:
        "Baku is the capital and largest city of Azerbaijan. It is known for its modern architecture, rich history, and cultural heritage. The city is located on the Caspian Sea and offers beautiful views of the waterfront. Fun fact: Baku is home to the Flame Towers, a trio of skyscrapers that are illuminated with LED lights at night.",
      hint1: "This capital holds a F1 Grand Prix every year",
      hint2: "This capital was once given the nickname 'Paris of the East'",
      hint3: "This capital ends with the letter 'u'",
      hint4: "This capital begins with a 'B'",
      hint5: "This capital is 4 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Bahamas",
      capital: "Nassau",
      flag: "https://flagcdn.com/bs.svg",
      description:
        "Nassau is the capital and largest city of The Bahamas. It is known for its beautiful beaches, vibrant culture, and colorful architecture. The city offers a wide range of activities, including snorkeling, diving, and shopping. Fun fact: Nassau is located on New Providence Island and is a popular cruise ship destination.",
      hint1: "This capital was once the pirate stronghold of the Caribbean",
      hint2: "This capital is located on New Providence Island",
      hint3: "This capital ends with the letter 'u'",
      hint4: "This capital begins with an 'N'",
      hint5: "This capital is 6 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Bahrain",
      capital: "Manama",
      flag: "https://flagcdn.com/bh.svg",
      description:
        "Manama is the capital and largest city of Bahrain. It is known for its modern skyline, luxury shopping malls, and vibrant nightlife. The city offers a mix of traditional and contemporary attractions, including the Bahrain National Museum and the Al Fateh Grand Mosque. Fun fact: Manama is home to the Bahrain International Circuit, which hosts the Formula One Bahrain Grand Prix.",
      hint1:
        "This capital was once known as Dilmun and was a major trading hub",
      hint2: "This capital is located on an island in the Persian Gulf",
      hint3: "This capital ends with the letters 'ama'",
      hint4: "This capital begins with an 'M'",
      hint5: "This capital is 6 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Bangladesh",
      capital: "Dhaka",
      flag: "https://flagcdn.com/bd.svg",
      description:
        "Dhaka is the capital and largest city of Bangladesh. It is known for its bustling streets, vibrant markets, and rich cultural heritage. The city is home to many historical landmarks, such as the Lalbagh Fort and the National Parliament House. Fun fact: Dhaka is one of the fastest-growing cities in the world.",
      hint1:
        "This capital is one of the most densely populated cities in the world",
      hint2:
        "This capital is located on the banks of the Buriganga River. Locals call it the 'City of Mosques'",
      hint3: "This capital ends with the letter 'a'",
      hint4: "This capital begins with a 'D'",
      hint5: "This capital is 5 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Barbados",
      capital: "Bridgetown",
      flag: "https://flagcdn.com/bb.svg",
      description:
        "Bridgetown is the capital and largest city of Barbados. It is known for its beautiful beaches, colonial architecture, and vibrant culture. The city offers a mix of historical sites, such as the Garrison Historic Area, and modern attractions, including shopping malls and restaurants. Fun fact: Bridgetown is a UNESCO World Heritage Site.",
      hint1:
        "This capital was once a British colony and is known for its British influence",
      hint2: "This capital is known as the 'City of Bridges'",
      hint3: "This capital ends with the letters 'own'",
      hint4: "This capital begins with a 'B'",
      hint5: "This capital is 10 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Belarus",
      capital: "Minsk",
      flag: "https://flagcdn.com/by.svg",
      description:
        "Minsk is the capital and largest city of Belarus. It is known for its Soviet-era architecture, vibrant cultural scene, and rich history. The city offers a mix of historical landmarks, such as the Independence Square and the National Library of Belarus, as well as modern attractions, including shopping malls and parks. Fun fact: Minsk is often called the 'Hero City' due to its resilience during World War II.",
      hint1: "This capital is located on the Svislach and Nyamiha rivers",
      hint2:
        "This capital has had a turbulent history, including being destroyed during World War II and rebuilt afterwards",
      hint3: "This capital ends with the letter 'k'",
      hint4: "This capital begins with an 'M'",
      hint5: "This capital is 5 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Belgium",
      capital: "Brussels",
      flag: "https://flagcdn.com/be.svg",
      description:
        "Brussels is the capital and largest city of Belgium. It is known for its stunning architecture, delicious cuisine, and vibrant cultural scene. The city offers a mix of historical landmarks, such as the Grand Place and the Atomium, as well as modern attractions, including museums and art galleries. Fun fact: Brussels is often considered the de facto capital of the European Union.",
      hint1: "This capital is also known as the 'Capital of Europe'",
      hint2:
        "This capital has had a significant role in European history and politics, such as hosting the headquarters of NATO and the European Commission",
      hint3: "This capital ends with the letter 's'",
      hint4: "This capital begins with a 'B'",
      hint5: "This capital is 8 letters long",
      challenge_date: dates.pop(),
    },
    {
      name: "Belize",
      capital: "Belmopan",
      flag: "https://flagcdn.com/bz.svg",
      description:
        "Belmopan is the capital and largest city of Belize. It is known for its natural beauty, diverse wildlife, and Mayan ruins. The city offers a mix of outdoor activities, such as hiking and cave exploration, as well as cultural experiences, including visiting local markets and learning about the Mayan history. Fun fact: Belmopan is one of the smallest capital cities in the world.",
      hint1: "This capital is located at the geographic center of Belize",
      hint2:
        "This capital has the smallest population of any capital city in Central America",
      hint3: "This capital is 8 letters long",
      hint4: "This capital begins with a 'B'",
      hint5: "This capital ends with the letters 'pan'",
      challenge_date: dates.pop(),
    },
    {
      name: "Benin",
      capital: "Porto-Novo",
      flag: "https://flagcdn.com/bj.svg",
      description:
        "Porto-Novo is the official capital of Benin. It is known for its rich history, vibrant culture, and colorful markets. The city offers a mix of traditional and modern attractions, including historical landmarks, such as the Royal Palace and the Ethnographic Museum, as well as contemporary art galleries and restaurants. Fun fact: Porto-Novo is located on the coast of the Gulf of Guinea.",
      hint1: "This capital has a French name that means 'New Port'",
      hint2:
        "Some people consider this capital to be the cultural capital of Benin, while Cotonou is the economic capital",
      hint3: "This capital is 2 words long with a hyphen",
      hint4: "This capital begins with a 'P'",
      hint5: "This capital ends with the word 'Novo'",
      challenge_date: dates.pop(),
    },
    {
      name: "Bhutan",
      capital: "Thimphu",
      flag: "https://flagcdn.com/bt.svg",
      description:
        "Thimphu is the capital and largest city of Bhutan. It is known for its stunning natural beauty, traditional architecture, and vibrant culture. The city offers a mix of historical landmarks, such as the Tashichho Dzong and the National Memorial Chorten, as well as modern attractions, including shopping malls and restaurants. Fun fact: Thimphu is one of the only capital cities in the world without traffic lights.",
      hint1: "This capital is located in the Himalayas",
      hint2: "This capital is known as the happiest city in Asia",
      hint3: "This capital is 6 letters long",
      hint4: "This capital begins with a 'T'",
      hint5: "This capital ends with the letters 'phu'",
      challenge_date: dates.pop(),
    },
    {
      name: "Bolivia",
      capital: "La Paz",
      flag: "https://flagcdn.com/bo.svg",
      description:
        "La Paz is the administrative capital of Bolivia. It is known for its stunning mountain scenery, colorful markets, and rich cultural heritage. The city offers a mix of historical landmarks, such as the Witches' Market and the San Francisco Church, as well as modern attractions, including museums and art galleries. Fun fact: La Paz is one of the highest capital cities in the world, located at an elevation of over 11,900 feet (3,600 meters) above sea level.",
      hint1: "This capital is the highest capital city in the world",
      hint2:
        "This capital translates to 'The Peace' in Spanish, but it is not the official capital of Bolivia",
      hint3: "This capital is 2 words long",
      hint4: "This capital begins with a 'L'",
      hint5: "This capital ends with the word 'Paz'",
      challenge_date: dates.pop(),
    },
    {
      name: "Bosnia and Herzegovina",
      capital: "Sarajevo",
      flag: "https://flagcdn.com/ba.svg",
      description:
        "Sarajevo is the capital and largest city of Bosnia and Herzegovina. It is known for its rich history, diverse culture, and stunning architecture. The city offers a mix of historical landmarks, such as the Gazi Husrev-beg Mosque and the Latin Bridge, as well as modern attractions, including shopping malls and restaurants. Fun fact: Sarajevo hosted the 1984 Winter Olympics.",
      hint1:
        "This capital is known as the 'Jerusalem of Europe' because of its religious diversity",
      hint2:
        "This capital has been influenced by Ottoman, Austro-Hungarian, and Yugoslav cultures",
      hint3: "This capital is 8 letters long",
      hint4: "This capital begins with a 'S'",
      hint5: "This capital ends with the letters 'evo'",
      challenge_date: dates.pop(),
    },
    {
      name: "Botswana",
      capital: "Gaborone",
      flag: "https://flagcdn.com/bw.svg",
      description:
        "Gaborone is the capital and largest city of Botswana. It is known for its modern architecture, vibrant culture, and beautiful parks. The city offers a mix of historical landmarks, such as the Three Dikgosi Monument and the National Museum, as well as modern attractions, including shopping malls and restaurants. Fun fact: Gaborone is located near the border with South Africa.",
      hint1: "This capital is located on the Notwane River",
      hint2: "This capital is known for its diamond trade",
      hint3: "This capital is 8 letters long",
      hint4: "This capital begins with a 'G'",
      hint5: "This capital ends with the letters 'rone'",
      challenge_date: dates.pop(),
    },
    {
      name: "Brazil",
      capital: "Brasília",
      flag: "https://flagcdn.com/br.svg",
      description:
        "Brasília is the capital of Brazil. It is known for its modernist architecture, futuristic design, and urban planning. The city offers a mix of historical landmarks, such as the Cathedral of Brasília and the National Congress, as well as modern attractions, including shopping malls and parks. Fun fact: Brasília was built in the shape of an airplane.",
      hint1: "This capital is a UNESCO World Heritage Site",
      hint2: "This capital is the third most populous city in Brazil",
      hint3: "This capital is 7 letters long",
      hint4: "This capital begins with a 'B'",
      hint5: "This capital ends with the letters 'lia'",
      challenge_date: dates.pop(),
    },
    {
      name: "Brunei",
      capital: "Bandar Seri Begawan",
      flag: "https://flagcdn.com/bn.svg",
      description:
        "Bandar Seri Begawan is the capital and largest city of Brunei. It is known for its stunning mosques, beautiful parks, and vibrant culture. The city offers a mix of historical landmarks, such as the Sultan Omar Ali Saifuddien Mosque and the Royal Regalia Museum, as well as modern attractions, including shopping malls and restaurants. Fun fact: Bandar Seri Begawan is located on the Brunei River and offers scenic views of the waterfront.",
      hint1: "This capital is known for its golden-domed mosques",
      hint2: "This capital is located on the island of Borneo",
      hint3: "This capital is 3 words long",
      hint4: "This capital begins with a 'B'",
      hint5: "This capital ends with the word 'Begawan'",
      challenge_date: dates.pop(),
    },
    {
      name: "Bulgaria",
      capital: "Sofia",
      flag: "https://flagcdn.com/bg.svg",
      description:
        "Sofia is the capital and largest city of Bulgaria. It is known for its rich history, stunning architecture, and vibrant culture. The city offers a mix of historical landmarks, such as the Alexander Nevsky Cathedral and the National Palace of Culture, as well as modern attractions, including shopping malls and restaurants. Fun fact: Sofia is one of the oldest capital cities in Europe.",
      hint1: "This capital is located at the foot of Vitosha Mountain",
      hint2: "This capital is known for its mineral springs and thermal baths",
      hint3: "This capital is 5 letters long",
      hint4: "This capital begins with a 'S'",
      hint5: "This capital ends with the letter 'a'",
      challenge_date: dates.pop(),
    },
    {
      name: "Burkina Faso",
      capital: "Ouagadougou",
      flag: "https://flagcdn.com/bf.svg",
      description:
        "Ouagadougou is the capital and largest city of Burkina Faso. It is known for its vibrant culture, colorful markets, and traditional music and dance. The city offers a mix of historical landmarks, such as the National Museum and the Grand Mosque, as well as modern attractions, including shopping malls and restaurants. Fun fact: Ouagadougou is located in the Sahel region of West Africa.",
      hint1: "This capital is known for its lively music and dance scene",
      hint2: "One time this capital was known as 'Wogodogo'",
      hint3: "This capital is 11 letters long",
      hint4: "This capital begins with an 'O'",
      hint5: "This capital ends with the letters 'gou'",
      challenge_date: dates.pop(),
    },
    {
      name: "Burundi",
      capital: "Gitega",
      flag: "https://flagcdn.com/bi.svg",
      description:
        "Gitega is the capital and largest city of Burundi. It is known for its rich history, vibrant culture, and stunning natural beauty. The city offers a mix of historical landmarks, such as the Gishora Drum Sanctuary and the Burundi National Museum, as well as modern attractions, including shopping malls and restaurants. Fun fact: Gitega was the capital of Burundi until 2018, when it was replaced by Bujumbura.",
      hint1: "This capital is known for its traditional drumming ceremonies",
      hint2: "Famously known as the 'City of Hills'",
      hint3: "This capital is 6 letters long",
      hint4: "This capital begins with a 'G'",
      hint5: "This capital ends with the letter 'a'",
      challenge_date: dates.pop(),
    },
    {
      name: "Cambodia",
      capital: "Phnom Penh",
      flag: "https://flagcdn.com/kh.svg",
      description:
        "Phnom Penh is the capital and largest city of Cambodia. It is known for its rich history, stunning architecture, and vibrant culture. The city offers a mix of historical landmarks, such as the Royal Palace and the Tuol Sleng Genocide Museum, as well as modern attractions, including shopping malls and restaurants. Fun fact: Phnom Penh is located at the confluence of the Mekong and Tonlé Sap rivers.",
      hint1: "This capital was once known as the 'Pearl of Asia'",
      hint2: "This capital is known for its French colonial architecture",
      hint3: "This capital is 2 words long",
      hint4: "This capital begins with a 'P'",
      hint5: "This capital ends with the word 'Penh'",
      challenge_date: dates.pop(),
    },
    {
      name: "Cameroon",
      capital: "Yaoundé",
      flag: "https://flagcdn.com/cm.svg",
      description:
        "Yaoundé is the capital and largest city of Cameroon. It is known for its rich history, diverse culture, and stunning architecture. The city offers a mix of historical landmarks, such as the National Museum and the Reunification Monument, as well as modern attractions, including shopping malls and restaurants. Fun fact: Yaoundé is located on seven hills and offers beautiful views of the surrounding landscape.",
      hint1: "This capital is known as the 'City of Seven Hills'",
      hint2: "This capital is the second largest city in Cameroon",
      hint3: "This capital is 7 letters long",
      hint4: "This capital begins with a 'Y'",
      hint5: "This capital ends with the letter 'dé'",
      challenge_date: dates.pop(),
    },
    {
      name: "Canada",
      capital: "Ottawa",
      flag: "https://flagcdn.com/ca.svg",
      description:
        "Ottawa is the capital city of Canada. It is known for its stunning architecture, vibrant culture, and beautiful parks. The city offers a mix of historical landmarks, such as the Parliament Hill and the Rideau Canal, as well as modern attractions, including museums and art galleries. Fun fact: Ottawa is located on the Ottawa River and offers scenic views of the surrounding landscape.",
      hint1: "This capital is the second coldest capital city in the world",
      hint2: "This capital is known for its tulip festival",
      hint3: "This capital is 6 letters long",
      hint4: "This capital begins with an 'O'",
      hint5: "This capital ends with the letter 'a'",
      challenge_date: dates.pop(),
    },
    {
      name: "Cape Verde",
      capital: "Praia",
      flag: "https://flagcdn.com/cv.svg",
      description:
        "Praia is the capital and largest city of Cape Verde. It is known for its stunning beaches, vibrant culture, and colorful markets. The city offers a mix of historical landmarks, such as the Nossa Senhora da Graça Church and the Presidential Palace, as well as modern attractions, including shopping malls and restaurants. Fun fact: Praia is located on the southern coast of Santiago Island.",
      hint1: "This capital is located on the Atlantic Ocean",
      hint2: "This capital is known for its colorful colonial architecture",
      hint3: "This capital is 5 letters long",
      hint4: "This capital begins with a 'P'",
      hint5: "This capital ends with the letter 'a'",
      challenge_date: dates.pop(),
    },
    {
      name: "Central African Republic",
      capital: "Bangui",
      flag: "https://flagcdn.com/cf.svg",
      description:
        "Bangui is the capital and largest city of the Central African Republic. It is known for its rich history, diverse culture, and stunning architecture. The city offers a mix of historical landmarks, such as the Notre-Dame Cathedral and the Boganda Museum, as well as modern attractions, including shopping malls and restaurants. Fun fact: Bangui is located on the Ubangi River and offers beautiful views of the waterfront.",
      hint1: "This capital is known as the 'City of Palms'",
      hint2:
        "This capital is famous because it is the only city in the country",
      hint3: "This capital is 6 letters long",
      hint4: "This capital begins with a 'B'",
      hint5: "This capital ends with the letter 'gui'",
      challenge_date: dates.pop(),
    },
    {
      name: "Chad",
      capital: "N'Djamena",
      flag: "https://flagcdn.com/td.svg",
      description:
        "N'Djamena is the capital and largest city of Chad. It is known for its rich history, vibrant culture, and stunning architecture. The city offers a mix of historical landmarks, such as the Grand Mosque and the National Museum, as well as modern attractions, including shopping malls and restaurants. Fun fact: N'Djamena is located on the Chari River and offers beautiful views of the waterfront.",
      hint1: "This capital is known as the 'City of Sands'",
      hint2: "This capital is the largest city in Chad",
      hint3: "This capital is 8 letters long",
      hint4: "This capital begins with an 'N'D",
      hint5: "This capital ends with the letters 'ena'",
      challenge_date: dates.pop(),
    },
    {
      name: "Chile",
      capital: "Santiago",
      flag: "https://flagcdn.com/cl.svg",
      description:
        "Santiago is the capital and largest city of Chile. It is known for its stunning mountain scenery, vibrant culture, and delicious cuisine. The city offers a mix of historical landmarks, such as the Plaza de Armas and the Metropolitan Cathedral, as well as modern attractions, including shopping malls and restaurants. Fun fact: Santiago is located in the central valley of Chile and offers beautiful views of the Andes Mountains.",
      hint1: "This capital is known for its wine production",
      hint2:
        "This capital was founded in 1541 by the Spanish conquistador Pedro de Valdivia",
      hint3: "This capital is 8 letters long",
      hint4: "This capital begins with an 'S'",
      hint5: "This capital ends with the letter 'go'",
      challenge_date: dates.pop(),
    },
    {
      name: "China",
      capital: "Beijing",
      flag: "https://flagcdn.com/cn.svg",
      description:
        "Beijing is the capital city of China. It is known for its rich history, stunning architecture, and vibrant culture. The city offers a mix of historical landmarks, such as the Forbidden City and the Great Wall of China, as well as modern attractions, including shopping malls and restaurants. Fun fact: Beijing hosted the 2008 Summer Olympics.",
      hint1:
        "This capital is one of the oldest cities in the world and has been the capital of China for over 800 years",
      hint2:
        "This capital houses the largest palace complex in the world, known as the Forbidden City",
      hint3: "This capital is 7 letters long",
      hint4: "This capital begins with a 'B'",
      hint5: "This capital ends with the letters 'g'",
      challenge_date: dates.pop(),
    },
    {
      name: "Colombia",
      capital: "Bogotá",
      flag: "https://flagcdn.com/co.svg",
      description:
        "Bogotá is the capital and largest city of Colombia. It is known for its rich history, vibrant culture, and stunning architecture. The city offers a mix of historical landmarks, such as the Gold Museum and the Monserrate Hill, as well as modern attractions, including shopping malls and restaurants. Fun fact: Bogotá is located in the Andes Mountains and offers beautiful views of the surrounding landscape.",
      hint1: "This capital is one of the highest capital cities in the world",
      hint2: "Famous for its emeralds and coffee",
      hint3: "This capital is 6 letters long",
      hint4: "This capital begins with a 'B'",
      hint5: "This capital ends with the letter 'tá'",
      challenge_date: dates.pop(),
    },
    {
      name: "Comoros",
      capital: "Moroni",
      flag: "https://flagcdn.com/km.svg",
      description:
        "Moroni is the capital and largest city of Comoros. It is known for its stunning beaches, vibrant culture, and colorful markets. The city offers a mix of historical landmarks, such as the Old Friday Mosque and the National Museum, as well as modern attractions, including shopping malls and restaurants. Fun fact: Moroni is located on the western coast of Grande Comore Island.",
      hint1: "This capital is located on the Indian Ocean",
      hint2: "This capital is known for its volcanic landscapes",
      hint3: "This capital is 6 letters long",
      hint4: "This capital begins with an 'M'",
      hint5: "This capital ends with the letter 'i'",
      challenge_date: dates.pop(),
    },
    {
      name: "Costa Rica",
      capital: "San José",
      flag: "https://flagcdn.com/cr.svg",
      description:
        "San José is the capital and largest city of Costa Rica. It is known for its rich history, vibrant culture, and stunning architecture. The city offers a mix of historical landmarks, such as the National Theater and the Metropolitan Cathedral, as well as modern attractions, including shopping malls and restaurants. Fun fact: San José is located in the Central Valley of Costa Rica and offers beautiful views of the surrounding mountains.",
      hint1: "This capital is known for its coffee production",
      hint2: "This capital is the second largest city in Central America",
      hint3: "This capital is 2 words long and 7 letters excluding the space",
      hint4: "This capital begins with an 'S'",
      hint5: "This capital ends with the letters 'é'",
      challenge_date: dates.pop(),
    },
    {
      name: "Croatia",
      capital: "Zagreb",
      flag: "https://flagcdn.com/hr.svg",
      description:
        "Zagreb is the capital and largest city of Croatia. It is known for its rich history, stunning architecture, and vibrant culture. The city offers a mix of historical landmarks, such as the St. Mark's Church and the Zagreb Cathedral, as well as modern attractions, including shopping malls and restaurants. Fun fact: Zagreb is located on the slopes of Medvednica Mountain and offers beautiful views of the surrounding landscape.",
      hint1: "This capital is known for its Austro-Hungarian architecture",
      hint2: "Famous people such as Nikola Tesla were born in this capital",
      hint3: "This capital is 6 letters long",
      hint4: "This capital begins with a 'Z'",
      hint5: "This capital ends with the letter 'b'",
      challenge_date: dates.pop(),
    },
    {
      name: "Cuba",
      capital: "Havana",
      flag: "https://flagcdn.com/cu.svg",
      description:
        "Havana is the capital and largest city of Cuba. It is known for its rich history, vibrant culture, and stunning architecture. The city offers a mix of historical landmarks, such as the Malecón and the Capitolio, as well as modern attractions, including shopping malls and restaurants. Fun fact: Havana is located on the north coast of Cuba and offers beautiful views of the Caribbean Sea.",
      hint1: "This capital is known for its colorful vintage cars",
      hint2:
        "Many famous people such as Ernest Hemingway and Nat King Cole lived in this capital",
      hint3: "This capital is 6 letters long",
      hint4: "This capital begins with an 'H'",
      hint5: "This capital ends with the letter 'a'",
      challenge_date: dates.pop(),
    },
    {
      name: "Cyprus",
      capital: "Nicosia",
      flag: "https://flagcdn.com/cy.svg",
      description:
        "Nicosia is the capital and largest city of Cyprus. It is known for its rich history, stunning architecture, and vibrant culture. The city offers a mix of historical landmarks, such as the Venetian Walls and the Selimiye Mosque, as well as modern attractions, including shopping malls and restaurants. Fun fact: Nicosia is the last divided capital city in the world, with a UN buffer zone separating the Greek and Turkish Cypriot communities.",
      hint1:
        "This capital is the only divided capital in the world between Greek and Turkish Cypriots",
      hint2: "This capital can be traced back to the Bronze Age",
      hint3: "This capital is 7 letters long",
      hint4: "This capital begins with an 'N'",
      hint5: "This capital ends with the letter 'a'",
      challenge_date: dates.pop(),
    },
    {
      name: "Czech Republic",
      capital: "Prague",
      flag: "https://flagcdn.com/cz.svg",
      description:
        "Prague is the capital and largest city of the Czech Republic. It is known for its rich history, stunning architecture, and vibrant culture. The city offers a mix of historical landmarks, such as the Charles Bridge and the Prague Castle, as well as modern attractions, including shopping malls and restaurants. Fun fact: Prague is often called the 'City of a Hundred Spires' due to its many churches and towers.",
      hint1: "This capital is home to the famous Astronomical Clock",
      hint2: "This capital is the historical capital of Bohemia",
      hint3: "This capital is 6 letters long",
      hint4: "This capital begins with a 'P'",
      hint5: "This capital ends with the letter 'e'",
      challenge_date: dates.pop(),
    },
  ]);
};
