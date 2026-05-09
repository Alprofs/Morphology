// ملف: questionsBank.js

const questionsBank = [
    // ================= PART 1: Identify from Image =================
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/capisicum.jpg' class='q-img'>", opts: ["Capsicum", "Senna", "Colocynth", "Star Anise"], correct: 0 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/nux-vomica.jpg' class='q-img'>", opts: ["Castor", "Nux-vomica", "Datura", "Psyllium"], correct: 1 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/cardamom.jpg' class='q-img'>", opts: ["Coriander", "Nutmeg", "Cardamom", "Strophanthus"], correct: 2 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/psyllium.jpg' class='q-img'>", opts: ["Psyllium", "Datura", "Senna", "Lavender"], correct: 0 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/castor.jpg' class='q-img'>", opts: ["Nutmeg", "Nux-vomica", "Cardamom", "Castor"], correct: 3 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/safflower.jpg' class='q-img'>", opts: ["Safflower", "Saffron", "Santonica", "Hibiscus"], correct: 0 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/colocynth-bulb.jpg' class='q-img'>", opts: ["Colocynth", "Capsicum", "Nutmeg", "Star Anise"], correct: 0 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/saffron.jpg' class='q-img'>", opts: ["Santonica", "Saffron", "Safflower", "Lavender"], correct: 1 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/coriandar.jpg' class='q-img'>", opts: ["Coriander", "Cardamom", "Senna", "Psyllium"], correct: 0 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/santonica.jpg' class='q-img'>", opts: ["Santonica", "Safflower", "Lavender", "Hibiscus"], correct: 0 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/datura.jpg' class='q-img'>", opts: ["Nux-vomica", "Psyllium", "Datura", "Castor"], correct: 2 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/senna.jpg' class='q-img'>", opts: ["Coriander", "Senna", "Colocynth", "Capsicum"], correct: 1 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/hibiscus.jpg' class='q-img'>", opts: ["Saffron", "Lavender", "Safflower", "Hibiscus"], correct: 3 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/star-anise.jpg' class='q-img'>", opts: ["Star Anise", "Colocynth", "Nutmeg", "Capsicum"], correct: 0 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/lavender.jpg' class='q-img'>", opts: ["Lavender", "Santonica", "Safflower", "Hibiscus"], correct: 0 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/strophanthus.jpg' class='q-img'>", opts: ["Nux-vomica", "Strophanthus", "Psyllium", "Castor"], correct: 1 },
    { section: "part1", q: "Identify the plant from this image:<br><img src='images/nutmeg.jpg' class='q-img'>", opts: ["Cardamom", "Castor", "Nutmeg", "Datura"], correct: 2 },

    // ================= PART 2: Complete Origin (Tricky Questions) =================
    { section: "part2", q: "What is the complete origin of <b>Capsicum</b>?", opts: [
        "Dried unripe fruits of Capsicum minimum Fam. Solanaceae", 
        "Dried ripe fruits of Capsicum minimum Fam. Solanaceae", 
        "Dried ripe seeds of Capsicum minimum Fam. Solanaceae", 
        "Dried ripe fruits of Capsicum minimum Fam. Apocynaceae"
    ], correct: 1 },
    
    { section: "part2", q: "Which of the following is the correct origin of <b>Colocynth</b>?", opts: [
        "Dried ripe fruits of Citrullus colocynthis Fam. Cucurbitaceae", 
        "Dried unripe but fully grown fruits of Citrullus colocynthis Fam. Cucurbitaceae", 
        "Dried unripe but fully grown seeds of Citrullus colocynthis Fam. Cucurbitaceae", 
        "Dried ripe fruits of Citrullus colocynthis Fam. Compositae"
    ], correct: 1 },

    { section: "part2", q: "What is the complete origin of <b>Nutmeg</b>?", opts: [
        "Dried ripe seeds of Myristica fragrans deprived of its testa Fam. Myristicaceae", 
        "Dried unripe seeds of Myristica fragrans Fam. Magnoliaceae", 
        "Dried ripe seeds of Myristica fragrans deprived of its mace (arillus or arillode) Fam. Myristicaceae", 
        "Dried ripe fruits of Myristica fragrans deprived of its arillus Fam. Myristicaceae"
    ], correct: 2 },

    { section: "part2", q: "What is the correct origin of <b>Saffron</b>?", opts: [
        "Dried styles and tops of stigmas of Crocus sativus Fam. Iridaceae", 
        "Dried stigmas and tops of styles of Crocus sativus Fam. Iridaceae", 
        "Dried stigmas and tops of styles of Crocus sativus Fam. Compositae", 
        "Dried unexpanded flower heads of Crocus sativus Fam. Iridaceae"
    ], correct: 1 },

    { section: "part2", q: "Which of the following represents <b>Santonica</b>?", opts: [
        "Dried unexpanded flower heads of Artemisia cina Fam. Compositae", 
        "Dried expanded flower heads of Artemisia cina Fam. Compositae", 
        "Dried disc florets of Artemisia cina Fam. Compositae", 
        "Dried unexpanded flowers of Artemisia cina Fam. Iridaceae"
    ], correct: 0 },

    { section: "part2", q: "What is the complete origin of <b>Cardamom</b>?", opts: [
        "Dried ripe seeds of Elettaria cardamomum Fam. Zingiberaceae", 
        "Dried ripe or nearly ripe fruits of Elettaria cardamomum Fam. Zingiberaceae", 
        "Dried ripe or nearly ripe seeds of Elettaria cardamomum Fam. Zingiberaceae", 
        "Dried unripe seeds of Elettaria cardamomum Fam. Umbelliferae"
    ], correct: 2 },

    { section: "part2", q: "What is the correct origin of <b>Hibiscus</b>?", opts: [
        "Dried flowers of Hibiscus sabdariffa Fam. Malvaceae", 
        "Dried calyx and corolla of Hibiscus sabdariffa Fam. Malvaceae", 
        "Dried calyx and epicalyx of Hibiscus sabdariffa Fam. Malvaceae", 
        "Dried disc florets of Hibiscus sabdariffa Fam. Compositae"
    ], correct: 2 },

    { section: "part2", q: "Choose the correct origin for <b>Senna</b>:", opts: [
        "Dried ripe seeds of Cassia acutifolia and Cassia angustifolia Fam. Leguminosae", 
        "Dried ripe fruits of Cassia acutifolia and Cassia angustifolia Fam. Leguminosae", 
        "Dried unripe fruits of Cassia acutifolia and Cassia angustifolia Fam. Leguminosae", 
        "Dried ripe fruits of Cassia acutifolia Fam. Umbelliferae"
    ], correct: 1 },

    { section: "part2", q: "Which of the following represents the origin of <b>Coriander</b>?", opts: [
        "Dried ripe fruits of Coriandrum sativum Fam. Umbelliferae", 
        "Dried nearly ripe fruits of Coriandrum sativum Fam. Umbelliferae", 
        "Dried nearly ripe seeds of Coriandrum sativum Fam. Umbelliferae", 
        "Dried unripe fruits of Coriandrum sativum Fam. Umbelliferae"
    ], correct: 1 },

    { section: "part2", q: "What is the complete origin of <b>Safflower</b>?", opts: [
        "Dried ray florets of Carthamus tinctorius Fam. Compositae", 
        "Dried disc florets of Carthamus tinctorius Fam. Compositae", 
        "Dried unexpanded flower heads of Carthamus tinctorius Fam. Compositae", 
        "Dried stigmas and styles of Carthamus tinctorius Fam. Compositae"
    ], correct: 1 },

    { section: "part2", q: "What is the origin of <b>Strophanthus</b>?", opts: [
        "Dried ripe seeds of Strophanthus kombe, S. hispidus and S. gratus Fam. Apocynaceae", 
        "Dried ripe seeds of Strophanthus kombe Fam. Loganiaceae", 
        "Dried ripe fruits of Strophanthus kombe, S. hispidus and S. gratus Fam. Apocynaceae", 
        "Dried nearly ripe seeds of Strophanthus kombe Fam. Apocynaceae"
    ], correct: 0 },

    { section: "part2", q: "What is the origin of <b>Nux-vomica</b>?", opts: [
        "Dried unripe seeds of Strychnos nux-vomica Fam. Loganiaceae", 
        "Dried ripe seeds of Strychnos nux-vomica Fam. Solanaceae", 
        "Dried ripe fruits of Strychnos nux-vomica Fam. Loganiaceae", 
        "Dried ripe seeds of Strychnos nux-vomica Fam. Loganiaceae"
    ], correct: 3 },
    
    { section: "part2", q: "Which of the following is the correct origin of <b>Star Anise</b>?", opts: [
        "Dried ripe seeds of Illicium verum Fam. Magnoliaceae", 
        "Dried nearly ripe fruits of Illicium verum Fam. Magnoliaceae", 
        "Dried ripe fruits of Illicium verum Fam. Magnoliaceae", 
        "Dried ripe fruits of Illicium verum Fam. Umbelliferae"
    ], correct: 2 }
];
