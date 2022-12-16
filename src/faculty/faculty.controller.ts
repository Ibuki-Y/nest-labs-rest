import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Faculty } from '@prisma/client';
import { FacultyService } from './faculty.service';

@Controller('faculty')
export class FacultyController {
  constructor(private facultyService: FacultyService) {}

  @Get()
  async getFaculties(): Promise<Faculty[]> {
    return this.facultyService.getFaculties();
  }

  @Get(':id')
  async getFacultyById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Faculty> {
    return this.facultyService.getFacultyById(id);
  }
}
