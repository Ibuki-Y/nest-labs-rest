import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Profile, Student, Grade } from '@prisma/client';
import { StudentService } from './student.service';
import { ProfileService } from '../profile/profile.service';

@Controller('student')
export class StudentController {
  constructor(
    private studentService: StudentService,
    private profileService: ProfileService,
  ) {}

  @Get()
  async getStudents(): Promise<Student[]> {
    const start = performance.now();
    const students = this.studentService.getStudents();
    const end = performance.now();
    console.log(`getStudents: ${end - start}`);
    return students;
  }

  @Get('grade/:grade')
  async getStudentByGrade(@Param('grade') grade: Grade): Promise<Student[]> {
    return this.studentService.getStudentByGrade(grade);
  }

  @Get(':id')
  async getStudentById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Student> {
    const start = performance.now();
    const student = this.studentService.getStudentById(id);
    const end = performance.now();
    console.log(`getStudentById: ${end - start}`);
    return student;
  }

  @Get('profile/:id')
  async getStudentProfileById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Profile> {
    return this.profileService.getProfileById(id);
  }
}
