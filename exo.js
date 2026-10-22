// créer un tableau d'objet de 5 utilisateurs
const utilisateurs = [
    { prenom: "Aminata", nom: "Diop", age: 30, statut: 1, role: "admin" },
    { prenom: "Lucas", nom: "Martin", age: 25, statut: 0, role: "user" },
    { prenom: "Fatou", nom: "Traoré", age: 35, statut: 1, role: "user" },
    { prenom: "Sophie", nom: "Bernard", age: 28, statut: 1, role: "admin" },
    { prenom: "Ibrahim", nom: "Kamara", age: 32, statut: 0, role: "user" }

];
// créer une fonction qui reçoit en paramètre un utilisateur et affiche ses informations , son prénom, son rôle et son âge
const afficherUtilisateur = (utilisateur) => {
  const { prenom, role, age } = utilisateur;
  console.log(Prénom : ${prenom});
  console.log(Rôle : ${role});
  console.log(Âge : ${age} ans);
};
// créer une fonction fléchée qui retourne la liste des utilisateurs ayant le rôle admis et qui sont actifs
const getAdminsActifs = (utilisateurs) =>
  utilisateurs.filter(user => user.role === "admin" && user.statut === "actif");
//  CREER UN TABLEAU CONTENANT UNIQUEMENT DES OBJETS COMME SUIT : PRENOM, NOM,ROLE (map et structuration)
const utilisateursSimplifies = utilisateurs.map(({ prenom, nom, role }) => ({
  prenom,
  nom,
  role
}));

console.log(utilisateursSimplifies);
// transformer le tableau pour obtenir un suel objet dont les cles correspondent aux roles et les valeurs sont des tableaux contenant des utilisateurs
const utilisateursParRole = utilisateurs.reduce((acc, user) => {
  const { role } = user;
  
  if (!acc[role]) {
    acc[role] = [];
  }
  
  acc[role].push(user);
  return acc;
}, {});

console.log(utilisateursParRole);
// creer une fonction qui affiche le premier utilisateur age de 25 ans en utilisant find 
const findUserByAge = (utilisateurs, age) =>
  utilisateurs.find(user => user.age === age);

// Utilisation
const premierVingtCinq = findUserByAge(utilisateurs, 25);
console.log(premierVingtCinq);
// ajouter un nouvel utilisateur dans un nouveau tableau appele equipe qui contient tout les utilisateurs du premier tableau , utilisez les spread operator
const nouvelUtilisateur = {
  nom: "Sow",
  prenom: "Awa",
  age: 25,
  statut: "actif",
  role: "utilisateur"
};

const equipe = [...utilisateurs, nouvelUtilisateur];

console.log(equipe);