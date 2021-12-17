import java.util.Scanner;
class pgm1 {

    void transcribe(String dnaStrand) {
        // throw new UnsupportedOperationException();
        
        StringBuilder rna_strand = new StringBuilder("");
        int i = 0;
        for(i = 0; i < dnaStrand.length(); i++)
        {
            switch(dnaStrand.charAt(i))
                {
                    case 'G':
                        rna_strand.append('C');
                        break;
                    case 'C':
                        rna_strand.append('G');
                        break;
                    case 'T':
                        rna_strand.append('A');
                        break;
                    case 'A':
                        rna_strand.append('U');
                        break;
                }
        }
        // result_rna_strand = ;
        String result_rna_strand = new String(rna_strand.toString());
        System.out.print( result_rna_strand);
    }
    public static void main(String args[])
    {
        pgm1 rna = new pgm1();
       rna.transcribe("ACGTGGTCTTAA");
    }
}
