import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  async getProfiles(): Promise<Profile[]> {
    return this.profileService.getProfiles();
  }

  @Get(':id')
  async getProfileById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Profile> {
    return this.profileService.getProfileById(id);
  }
}
