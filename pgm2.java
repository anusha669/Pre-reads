class TwelveDays {
    String verse(int verseNumber) {
        StringBuilder result = new StringBuilder();
        String wordFormNumbers[] = new String[12];
        wordFormNumbers[0] = "first";
        wordFormNumbers[1] = "second";
        wordFormNumbers[2] = "third";
        wordFormNumbers[3] = "fourth";
        wordFormNumbers[4] = "fifth";
        wordFormNumbers[5] = "sixth";
        wordFormNumbers[6] = "seventh";
        wordFormNumbers[7] = "eighth";
        wordFormNumbers[8] = "ninth";
        wordFormNumbers[9] = "tenth";
        wordFormNumbers[10] = "eleventh";
        wordFormNumbers[11] = "twelfth";
        
        result.append("On the "+wordFormNumbers[verseNumber-1]+" day of Christmas my true love gave to me: ");
        for(int j = verseNumber; j > 0; j--){
        switch(j){
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

    String verses(int startVerse, int endVerse) {
        int i = 0;
        StringBuilder result = new StringBuilder("");

        for(i=startVerse; i < endVerse; i++){
            result.append(verse(i));
            result.append("\n");
        }
        result.append(verse(endVerse));
        return result.toString();
    }
    String sing() {
        return verses(1, 12);
    }
}


// day -> { wordForm: first, line: "a patridge in a pear tree."}