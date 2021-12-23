public class TwelveDays {
    public String verse(int verseNumber) {
        StringBuilder result = new StringBuilder();
        String[] wordFormNumbers = {"first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth"};
        
        result.append("On the "+wordFormNumbers[verseNumber-1]+" day of Christmas my true love gave to me: ");
        for(int index2 = verseNumber; index2> 0; index2--){
        switch(index2){
            case 1: 
                result.append("a Partridge in a Pear Tree.");
                break;
            case 2:
                result.append("two Turtle Doves, and ");
                break;
            case 3:
                result.append("three French Hens, ");
                break;
            case 4: 
                result.append("four Calling Birds, ");
                break;
            case 5:
                result.append("five Gold Rings, ");
                break;
            case 6:
                result.append("six Geese-a-Laying, ");
                break;
            case 7: 
                result.append("seven Swans-a-Swimming, ");
                break;
            case 8:
                result.append("eight Maids-a-Milking, ");
                break;
            case 9:
                result.append("nine Ladies Dancing, ");
                break;
            case 10: 
                result.append("ten Lords-a-Leaping, ");
                break;
            case 11:
                result.append("eleven Pipers Piping, ");
                break;
            case 12:
                result.append("twelve Drummers Drumming, ");
                break;
        }  
    }
            result.append("\n");
        return result.toString();
    }

    public String verses(int startVerse, int endVerse) {
        int index1 = 0;
        StringBuilder result = new StringBuilder("");

        for(index1=startVerse; index1 < endVerse; index1++){
            result.append(verse(index1));
            result.append("\n");
        }
        result.append(verse(endVerse));
        return result.toString();
    }
    public String sing() {
        return verses(1, 12);
    }
}
