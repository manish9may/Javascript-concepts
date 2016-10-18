var GradeSystem = function(studentMarks){
	this.studentMarks = studentMarks;
	this.grade = null;
}

GradeSystem.prototype = (function(){
	var FindGrade = function(){
		if(this.studentMarks >= 80){
			this.grade = 'A';
		}else{
			this.grade = 'B';
		}
	};
	
	return {
		FindGrade : FindGrade
	}
})()

var Student = function(studentName,studentMarks){
	GradeSystem.call(this,studentMarks);
	this.studentName = studentName;
}
Student.prototype = Object.create(GradeSystem.prototype)
Student.prototype.PrintGrade = function(){
		console.log2('Grade opt by '+this.studentName+' student is '+this.grade+' with marks '+this.studentMarks);
};

var student1 = new Student('Manish',40);
student1.FindGrade();
student1.PrintGrade();
/*var student2 = new Student(90);
student2.FindGrade();
student2.PrintGrade();*/