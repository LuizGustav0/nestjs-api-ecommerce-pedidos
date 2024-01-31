import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

//apenas para fins de teste
const users = [
    {
        id: 1,
        username: 'teste',
        password: 'teste',
    },
    {
        id: 2,
        username: '123456',
        password: '123456',
    },
];

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    login(username: string, password: string) {
        const user = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (!user) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
