const studentService = require('../src/services/student');
const mongoose = require('mongoose');
const Student = require('../src/models/Student');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL);

  const student = new Student({
    name: "Test Student",
    email: "test@student.com",
    firstName: "Test",
    lastName: "Student",
    owner: new mongoose.Types.ObjectId(),
    images: ["image1.jpg"],
  });
  await student.save();
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('studentService.getAll', () => {
  test('should return all students', async () => {
    const students = await studentService.getAll();
    expect(Array.isArray(students)).toBe(true);
    expect(students.length).toBeGreaterThan(0);
  });
});

describe('studentService.getById', () => {
  let studentId;

  beforeAll(async () => {
    const students = await studentService.getAll();
    studentId = students[0]?.id;
  });

  test('should return correct student with valid id', async () => {
    const result = await studentService.getById(studentId);
    expect(result).toEqual(expect.objectContaining({ id: studentId }));
  });

  test('should return undefined with invalid id', async () => {
    const result = await studentService.getById('invalid-id');
    expect(result).toBeUndefined();
  });
});