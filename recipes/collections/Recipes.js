import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Recipes = new Mongo.Collections('recipes');

RecipeSchema = new SimpleSchema({
    name:{
        type:String,
        label:"Name"
    },
    desc:{
        type:String,
        label:"Description"
    },
    author:{
        type:String,
        label:"Author",
        autoValue:function(){
            return this.userId;
        },
        autoForm:{
            type:"hidden"
        }
    },
    createdAt:{
        type:Date,
        label:"CreatedAt",
        autoValue:function(){
            return new Date();
        }
    }
});

Recipes.attachSchema(RecipeSchema);