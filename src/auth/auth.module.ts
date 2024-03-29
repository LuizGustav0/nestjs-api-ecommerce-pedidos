import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';

@Global()
@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: 'secreteTest',
            signOptions: { expiresIn: '600s' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthGuard],
    exports: [AuthGuard],
})
export class AuthModule {}
