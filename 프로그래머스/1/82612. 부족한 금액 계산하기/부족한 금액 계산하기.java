class Solution {
    public long solution(int price, int money, int count) {
        long answer = 0;

        for(int temp = 1; temp <=count; temp++)
        {
            answer = answer + (price * temp);
        }
        
        if(money - answer > 0)
        {
            return 0;
        }
        else
        {
            return Math.abs(money - answer);
        }
    }
}