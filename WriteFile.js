import fs from "fs";
import * as R from "ramda";
import {fromPairs} from "ramda";


const file = JSON.parse(fs.readFileSync("./file.json"));
const fileTest = JSON.parse(fs.readFileSync("./test.json"));
const write = (data) =>  fs.writeFileSync("./file.json",JSON.stringify(data));
const writeFileTest = (data) =>  fs.writeFileSync("./test.json",JSON.stringify(data));

const create = file => (newlines) => R.pipe(
    R.assocPath([0,'child'],[1,2]),
    R.assocPath([1],newlines[0]),
    R.assocPath([2],newlines[1]),
    write
)(file);

const findNew = file => R.pipe(
    R.toPairs,
    R.reverse,
    R.take(2),
    R.fromPairs,
    R.pluck('city'),
    R.values
)(file);

const AddScore = file => (listScore) => R.pipe(
    R.assocPath([1,'score'],listScore[0]),
    R.assocPath([2,'score'],listScore[1]),
    write
)(file);

const WriteScore = AddScore(file);

const listNew = findNew(file);

const Update = create(file);

const Test = fileTest => (city,nb) =>R.pipe(
        R.assocPath([nb,'test'],city),
        writeFileTest
)(fileTest);

const writeTest = Test(fileTest)

export{Update, WriteScore, listNew, writeTest};