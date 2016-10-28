/**
 * Created by Agnieszka on 2016-10-28.
 */
var offices = [
    { id: "GD", name: "Gdańsk", headquarter: true },
    { id: "GL", name: "Gliwice" },
    { id: "KO", name: "Koszalin" }
];

var workers = [
    { id: 1,  name: "Bartek",     type: "P", office: "GD", salary: 300 },
    { id: 2,  name: "Wojtek",     type: "P", office: "GD", salary: 210 },
    { id: 3,  name: "Piotr",      type: "M", office: "GL", salary: 250 },
    { id: 4,  name: "Damian",     type: "P", office: "KO", salary: 290 },
    { id: 5,  name: "Jan",        type: "P", office: "GL", salary: 210 },
    { id: 6,  name: "Mateusz",    type: "P", office: "GD", salary: 290 },
    { id: 7,  name: "Weronika",   type: "M", office: "KO", salary: 240 },
    { id: 8,  name: "Gabriela",   type: "M", office: "GD", salary: 290 },
    { id: 9,  name: "Alina",      type: "M", office: "KO", salary: 290 },
    { id: 10, name: "Aleksander", type: "P", office: "GL", salary: 260 },
    { id: 11, name: "Tomek",      type: "P", office: "GD", salary: 200 },
    { id: 12, name: "Krzysztof",  type: "M", office: "KO", salary: 290 },
    { id: 13, name: "Marcin",     type: "P", office: "GD", salary: 280 },
    { id: 14, name: "Agata",      type: "P", office: "GD", salary: 230 },
    { id: 15, name: "Magda",      type: "P", office: "KO", salary: 220 }
];


function isOfficeWorker (location) {
    return function (worker) {
        return worker.office.indexOf(location) !== -1;
    }
}

var IsOfficeWorkerGD = workers.filter(isOfficeWorker("GD"));

// console.log(IsOfficeWorkerGD);

var IsOfficeWorkerGL = workers.filter(isOfficeWorker("GL"));

// console.log(IsOfficeWorkerGL);

var IsOfficeWorkerKO = workers.filter(isOfficeWorker("KO"));

// console.log(IsOfficeWorkerKO);


function getWorkers(worker) {
    return worker.name;
}

var workersGD = IsOfficeWorkerGD.map(getWorkers);
// console.log(workersGD);

var workersGL = IsOfficeWorkerGL.map(getWorkers);
// console.log(workersGL);

var workersKO = IsOfficeWorkerKO.map(getWorkers);
// console.log(workersKO);

offices[0].workers = workersGD;
offices[1].workers = workersGL;
offices[2].workers = workersKO;

console.log(offices);