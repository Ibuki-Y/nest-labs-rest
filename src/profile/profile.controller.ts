import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  async getProfiles(): Promise<Profile[]> {
    const start = performance.now();
    const profiles = this.profileService.getProfiles();
    const end = performance.now();
    console.log(`getProfiles: ${end - start}`);
    return profiles;
  }

  @Get(':id')
  async getProfileById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Profile> {
    const start = performance.now();
    const profile = this.profileService.getProfileById(id);
    const end = performance.now();
    console.log(`getProfileById: ${end - start}`);
    return profile;
  }
}
