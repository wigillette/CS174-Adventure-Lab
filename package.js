/**
 * Package Module
 * Returns the table of location information
 */

const info = {
    BWC: {
      Description: "The place I spend most of my time due to all of my classes being remote.",
      AdjacentLocations: ["Kaleidoscope", "Upper Wismer", "Myrin Library"]
    },
    Kaleidoscope: {
      Description: "The place I used to spend all my time during the intensive CIE block.",
      AdjacentLocations: ["BWC", "Patterson Athletic Field"]
    },
    ["Upper Wismer"]: {
      Description: "The place I prefer to eat at when I want quantity as opposed to quality.",
      AdjacentLocations: ["Lower Wismer", "BWC"]
    },
    ["Lower Wismer"]: {
      Description: "The place I prefer to eat at when I want quality as opposed to quantity.",
      AdjacentLocations: ["Upper Wismer", "Patterson Athletic Field"]
    },
    ["Berman Museum of Art"]:{
        Description: "I have not been here yet, but the art exhibits seem fascinating.",
        AdjacentLocations: ["Myrin Library", "BWC", "Main Street"]
    },
    ["Myrin Library"]: {
      Description: "The place I go to study when my roommate does does not use earbuds when watching sports",
      AdjacentLocations: ["Berman Museum of Art", "BWC"]
    },
    ["Patterson Athletic Field"]: {
      Description: "The place I meet up with Henry, Dylan, and the rest of the team to go out to run",
      AdjacentLocations: ["Lower Wismer", "Floy Lewis Bakes Center", "Main Street"]
    },
    ["Floy Lewis Bakes Center"]:  {
      Description: "The place where I receive my weekly COVID test.",
      AdjacentLocations: ["Patterson Athletic Field", "Main Street"]
    },
    ["Main Street"]: {
      Description: "The area which I will explore after the pandemic finally ends"
    }
};

export{
info
};