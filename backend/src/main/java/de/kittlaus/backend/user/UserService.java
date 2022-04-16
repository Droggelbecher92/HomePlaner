package de.kittlaus.backend.user;

import de.kittlaus.backend.models.user.MyRegisterUser;
import de.kittlaus.backend.models.user.MyUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;


    public Optional<MyUser> findByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    public ResponseEntity<MyUser> createUser(MyRegisterUser user) {
        if (userRepo.findByUsername(user.getUsername()).isPresent()){
            return ResponseEntity.status(HttpStatus.IM_USED).body(MyUser.builder().build());
        } else if (!user.getPassword().equals(user.getPasswordAgain())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(MyUser.builder().build());
        }
        return ResponseEntity.ok(userRepo.save(MyUser.builder().username(user.getUsername()).password(passwordEncoder.encode(user.getPassword())).build()));
    }
}
