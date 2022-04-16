package de.kittlaus.backend.models.security;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Token {

    private String token;

}
