// 解决以下异步代码问题--广度

/*检索并计算属于同一教室中每个学生的平均分数，例子中教室 ID 为 75。
每个学生可以在一年内参加一门或多门课程。以下 API 可用于检索所需数据。*/

// GET LIST OF ALL THE STUDENTS
GET / api / students
Response:
[{
    "id": 1,
    "name": "John",
    "classroomId": 75
}]
// GET COURSES FOR GIVEN A STUDENT
GET / api / courses ? filter = studentId eq 1
Response:
[{
    "id": "history",
    "studentId": 1
}, {
    "id": "algebra",
    "studentId": 1
},]
// GET EVALUATION FOR EACH COURSE
GET / api / evaluation / history ? filter = studentId eq 1
Response:
{
    "id": 200,
    "score": 50,
    "totalScore": 100
}
/*编写一个接受教室 ID 的函数，并根据该函数计算该教室中每个学生的平均值。 该函数的最终输出应该是带有平均分数的学生列表：*/
[
    { "id": 1, "name": "John", "average": 70.5 },
    { "id": 3, "name": "Lois", "average": 67 },
]
/*使用普通回调，promises，observables，generator 或 async-wait 编写所需的函数。 尝试使用至少 3 种不同的技术解决这个问题。*/