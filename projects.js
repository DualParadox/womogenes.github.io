
// Yoy! 
var projects = [];
var activeProjects= [];

var project1 = {
    id: "projectButton1",
    title: "Faster High Schoolers ",
    priceTag: "($10)",
    description: "High Schoolers work twice as fast",
    trigger: function() {return funds >= 5 && highSchoolers > 0;},
    uses: 1,
    cost: function() {return funds >= 10;},
    flag: 0,
    element: null,
    effect: function() {
        project1.flag = 1;
        displayMessage("High schoolers now work twice as fast.");
        highSchoolerBoost *= 2;
		project1.element.parentNode.removeChild(project1.element);
		funds -= 10;
        var index = activeProjects.indexOf(project1);
        activeProjects.splice(index, 1);
    }
}

projects.push(project1);

var project2 = {
	id: "projectButton2", 
	title: "Bank Account ", 
	priceTag: "($10)", 
	description: "Be able to borrow money", 
	trigger: function() {return funds >= 5;}, 
	uses: 1, 
	cost: function() {return funds >= 10;},
	flag: 0,
	element: null,
	effect: function() {
		project2.flag = 1;
		displayMessage("Bank account opened. You can now borrow money $20 at a time.");
		funds -= 10;
		bankUnlocked = true;
		bankDivEl.hidden = false;
		project2.element.parentNode.removeChild(project2.element);
		var index = activeProjects.indexOf(project2);
        activeProjects.splice(index, 1);
	}
}

projects.push(project2);

var project3 = {
	id: "projectButton3", 
	title: "Even Faster High Schoolers ", 
	priceTag: "($20)", 
	description: "Double interest rate, and high schoolers are twice as fast. ", 
	trigger: function() {return funds >= 10 && project1.flag;}, 
	uses: 1, 
	cost: function() {return funds >= 20;},
	flag: 0,
	element: null,
	effect: function() {
		project3.flag = 1;
		displayMessage("Speedy high schoolers!");
		highSchoolerBoost *= 2;
		interestRate *= 2;
		funds -= 20;
		project3.element.parentNode.removeChild(project3.element);
		var index = activeProjects.indexOf(project3);
        activeProjects.splice(index, 1);
	}
}

projects.push(project3);

var project4 = {
	id: "projectButton4", 
	title: "Highly Skilled Students ", 
	priceTag: "($40)", 
	description: "Double hire price, high schoolers work twice as fast. ", 
	trigger: function() {return funds >= 20 && project3.flag;}, 
	uses: 1, 
	cost: function() {return funds >= 40;},
	flag: 0,
	element: null,
	effect: function() {
		project3.flag = 1;
		displayMessage("When they work harder, you gotta pay them more.");
		highSchoolerBoost *= 2;
		minWage *= 2;
		funds -= 40;
		project4.element.parentNode.removeChild(project4.element);
		var index = activeProjects.indexOf(project4);
        activeProjects.splice(index, 1);
	}
}

projects.push(project4);











// 