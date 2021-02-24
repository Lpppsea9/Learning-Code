/*检索并计算属于同一教室中每个学生的平均分数，例子中教室 ID 为 75。每个学生可以在一年内参加一门或多门课程。以下 API 可用于检索所需数据。*/
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
Response: {
    "id": 200,
    "score": 50,
    "totalScore": 100
}

/*编写一个接受教室 ID 的函数，并根据该函数计算该教室中每个学生的平均值。 该函数的最终输出应该是带有平均分数的学生列表：*/

[
    { "id": 1, "name": "John", "average": 70.5 },
    { "id": 3, "name": "Lois", "average": 67 },
]

import {
    getStudents,
    getAllCourses,
    getEverylCourses
} from '~/service/getData.js';

const getAverage = async (classroomId) => {
    let temp = [];
    let score = {};
    let scoreList = [];
    let studentId = 0;
    let name = '';
    let total = 0;
    let result = [];
    try {
        const students = await getStudents();
        const filterClassroom = students.filter(x => x.classroomId === classroomId); //过滤特定classroomId的教室数组
        filterClassroom.map((item) => {
            try {
                studentId = item.id;
                name = item.name;
                scoreList = []; //初始化各科成绩数组
                temp = await getAllCourses(item.id);
                temp.map((v) => {
                    try {
                        score = await getEverylCourses(v.id, v.studentId);
                        scoreList.push(score);
                        total = 0; //初始化各科成绩总分
                        scoreList.map((x) => {
                            total += x.score
                        })
                    } catch (e) {
                        console.log('getEverylCourses接口出错，出错信息：' + e)
                    }
                })
            } catch (e) {
                console.log('getAllCourses接口出错，出错信息：' + e)
            }
            result.push({
                id: studentId,
                name: name,
                average: total / scoreList.length
            })
        })
    } catch (e) {
        console.log('getStudents接口出错，出错信息：' + e)
    }
    return result;
}

getAverage(75) //[{ "id": 1, "name": "John", "average": 70.5 },{ "id": 3, "name": "Lois", "average": 67 }]