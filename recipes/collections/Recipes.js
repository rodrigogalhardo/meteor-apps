Recipes = new Meteor.Collection('recipes');
RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    author: {
        type: String,
        label: "Author"
    },
    createdAt: {
        type: Date,
        label: "CreatedAt"
    }
});

Recipes.attachSchema(RecipeSchema);