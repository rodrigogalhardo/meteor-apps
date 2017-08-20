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
        label: "Author",
        autoValue: function () {
            return this.userId
        },
        autoForm:{
            type:"hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "CreatedAt",
        autoValue: function () {
            return new Date()
        },
        autoForm:{
            type:"hidden"
        }
    }
});

Recipes.attachSchema(RecipeSchema);