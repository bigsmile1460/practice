#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// numbers_len은 배열 numbers의 길이입니다.
int solution(int numbers[], size_t numbers_len) {
    int answer = 0;
    
    for(int numchk = 0; numchk < numbers_len; numchk++)
    {
        answer = answer + numbers[numchk];
    }
    
    answer = 45 - answer;
    
    return answer;
}