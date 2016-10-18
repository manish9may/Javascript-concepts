(function(globalVar){
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
	Student.prototype = Object.create(GradeSystem.prototype);
	Student.prototype.PrintGrade = function(){
		console.log2('Grade opt by '+this.studentName+' student is '+this.grade+' with marks '+this.studentMarks);
	};
	globalVar.Student = Student;
})(window.globalVar = window.globalVar || {});


var student1 = new globalVar.Student('Manish',40);
student1.FindGrade();
student1.PrintGrade();