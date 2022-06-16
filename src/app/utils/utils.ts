export class Utils {
    public static goToAdmPokemon() {
        const a = document.createElement('a');
        a.href = '#admPokemon';
        a.click();
        a.remove();
    }
}