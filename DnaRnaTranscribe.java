import java.util.Scanner;

class DnaRnaTranscribe {

    void transcribe(String dnaStrand) {
        
        StringBuilder rnaStrand = new StringBuilder("");
        int index1= 0;
        for(index1= 0; index1< dnaStrand.length(); index1++)
        {
            switch(dnaStrand.charAt(index1))
                {
                    case 'G':
                        rnaStrand.append('C');
                        break;
                    case 'C':
                        rnaStrand.append('G');
                        break;
                    case 'T':
                        rnaStrand.append('A');
                        break;
                    case 'A':
                        rnaStrand.append('U');
                        break;
                }
        }
        String result_rnaStrand = new String(rnaStrand.toString());
        System.out.print( result_rnaStrand);
    }
    public static void main(String args[])
    {
        DnaRnaTranscribe rna = new DnaRnaTranscribe();
       rna.transcribe("ACGTGGTCTTAA");
    }
}
