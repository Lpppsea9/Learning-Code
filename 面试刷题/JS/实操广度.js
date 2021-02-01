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