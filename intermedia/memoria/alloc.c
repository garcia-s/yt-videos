#include <stdio.h>
#include <stdlib.h>


int main() {
    char *a = malloc(32);
    free(a);
    printf("%c", a[0]);
}



