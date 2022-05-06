import fs from "fs";
import * as R from "ramda";
import {fromPairs} from "ramda";


const file = JSON.parse(fs.readFileSync("./file.json"));
const fileTest = JSON.parse(fs.readFileSync("./test.json", 'utf-8'));
const write = (data) =>  fs.writeFileSync("./file.json",JSON.stringify(data));
const writeFileTest = (data) =>  fs.writeFile("./test.json",JSON.stringify(data),(err) => {
    if (err) {
        throw err;
    }});

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


const Test = fileTest => (nb) =>R.pipe(
    R.tap(console.log),
    R.assocPath([nb,'test'],"lyon"),
    writeFileTest
)(fileTest);

const writeTest = Test(fileTest)
const writeTest2 = Test2(fileTest)

export{Update, WriteScore, listNew, writeTest, writeTest2};