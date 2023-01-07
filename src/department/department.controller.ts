import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Department } from '@prisma/client';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Get()
  async getDepartments(): Promise<Department[]> {
    const start = performance.now();
    const departments = this.departmentService.getDepartments();
    const end = performance.now();
    console.log(`getDepartments: ${end - start}`);
    return departments;
  }

  @Get(':id')
  async getDepartmentById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Department> {
    const start = performance.now();
    const department = this.departmentService.getDepartmentById(id);
    const end = performance.now();
    console.log(`getDepartmentById: ${end - start}`);
    return department;
  }
}
