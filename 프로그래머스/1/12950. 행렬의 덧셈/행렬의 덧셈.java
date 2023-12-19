class Solution {
    public int[][] solution(int[][] arr1, int[][] arr2) {
        int[][] answer = new int[arr1.length][arr1[0].length];
        for(int x = 0; x<arr1.length; x++)
        {
            for(int y = 0; y<arr1[x].length; y++)
                {
                    answer[x][y] = arr1[x][y] + arr2[x][y];
                }

        }
        return answer;
    }
}