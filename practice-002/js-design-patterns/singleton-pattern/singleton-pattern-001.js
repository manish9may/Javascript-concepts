var Singletone = (function(){
	var _instance = null;
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
})();
var Student = function(studentName,studentMarks){
	GradeSystem.call(this,studentMarks);
	this.studentName = studentName;
}
Student.prototype = Object.create(GradeSystem.prototype)
Student.prototype.PrintGrade = function(){
		console.log2('Grade opt by '+this.studentName+' student is '+this.grade+' with marks '+this.studentMarks);
	};
	return {
		getInstance : function(studentName,studentMarks){
			if(!_instance){
				_instance = new Student(studentName,studentMarks)
			}
			return _instance;
		}
	};
})();

var student1 = Singletone.getInstance('Manish',40);
student1.FindGrade();
student1.PrintGrade();

var student2 = Singletone.getInstance('Jain',40);
student2.FindGrade();
student2.PrintGrade();